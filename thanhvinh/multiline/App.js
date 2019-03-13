import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  ScrollView,
  ListView,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import WhatsAppTextInput from 'react-native-whatsapp-textinput';

let messageList = [];
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messageText: '',
      sentMessage: '',
      showMessage: false,
    }
  }
  onChangedText(msgText) {
    this.setState({ messageText: msgText })
  }


  validateTextInput(text) {
    if (text.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  displayMessage(msg) {
    this.setState({ sentMessage: msg })
    messageList.push(msg);
    this.setState({ messageText: '' })
  }



  render() {
    return (
      <SafeAreaView forceInset={{ bottom: 'always' }} style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>

        <View style={{
          flex: 1,
        }}>
          <ScrollView contentContainerStyle={{
            flexGrow: 1,
            top: 0,
            borderRadius: 10,
            bottom: 60
          }}>
            <ListView
              enableEmptySections={true}
              dataSource={ds.cloneWithRows(messageList)}
              renderRow={(rowData) =>
                <View style={{
                  alignItems: 'flex-end',
                  // justifyContent: 'flex-end',
                  // position: 'absolute',
                  top: 10,
                  right: 10,
                }}>
                  <Text multiLine={true}
                    style={{
                      padding: 10,
                      marginTop: 10,
                      flexWrap: 'wrap',
                      textAlign: 'right',
                      backgroundColor: '#fff',
                    }}
                  >
                    {rowData}
                  </Text>
                </View>
              }
            />

          </ScrollView>

          <View style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0
          }}>
            <WhatsAppTextInput
              backgroundColor={'#fff'}
              borderTopColor={'#f5f5f5'}
              placeholderText={'Aa'}
              placeholderTextColor='#9e9e9e'
              messageTextColor={'#000'}
              textInputBgColor={'#f5f5f5'}
              editable={true}
              multiline={true}
              keyboardType={'default'}
              sendButtonBgColor={'#1a75ff'}
              sendButtonImage={require('./images/sendIcon.png')}
              sendButtonDisableColor={'#f5f5f0'}
              sendButtonEnableColor={'#002080'}
              onChange={(msg) => this.onChangedText(msg)}
              onPressButton={() => this.displayMessage(this.state.messageText)}
              validateButton={() => this.validateTextInput(this.state.messageText)}
              messageText={this.state.messageText}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

