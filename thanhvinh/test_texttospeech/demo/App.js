import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Constants } from 'expo';
import { Button } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faKeyboard, faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';



export default class App extends React.Component {


  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{
            flex: 1,
            color: '#ffffff',
            fontSize: 20,
            paddingTop: 10,
          }}>
            Translate
          </Text>
          <View style={{
            flexDirection: 'row',
            flex: 1,
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Button rounded small primary style={{
              backgroundColor: '#6ea5f7',
              flex: 1,
              flexDirection: 'row',
              marginRight: 10,
              padding: 5,
              alignItems: 'center',
            }}>
              <View style={{ alignItems: 'center', flex: 1 }}>
                <FontAwesomeIcon icon={faKeyboard} color={'white'}/>
              </View>
              {/* <FontAwesomeIcon icon={faKeyboard} color={'white'}
                style={{ marginRight: 8 }}
              /> */}
              <Text style={{color: '#ffffff', fontSize: 15, flex: 1 }}>Text</Text>
            </Button>
            <Button rounded small primary style={{
              backgroundColor: '#6ea5f7',
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <View style={{ alignItems: 'center', flex: 1 }}>
                <FontAwesomeIcon icon={faMicrophoneAlt} color={'white'}/>
              </View>
              {/* <FontAwesomeIcon icon={faMicrophoneAlt} color={'white'}
                style={{ backgroundColor: '#ff0', alignItems: 'center', flex: 1 }}
              /> */}
              <Text style={{ color: '#ffffff', fontSize: 15, flex: 1, marginRight: 12 }}>Voice</Text>
            </Button>
            {/* <View style={{
              flex: 1,
              flexDirection: 'row',
              borderRadius: 15,
              borderWidth: 0.5,
              borderColor: '#d6d7da',
              marginRight: 10,
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
              <Image
                style={{}}
                source={require('./assets/keyboard.png')}
              />
              <Text style={{}}>Text</Text>
            </View> */}
            {/* <View style={{
              flex: 1,
              flexDirection: 'row',
              borderRadius: 15,
              borderWidth: 0.5,
              borderColor: '#d6d7da',
              marginRight: 10,
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
              <Image
                style={{}}
                source={require('./assets/keyboard.png')}
              />
              <Text>Voice</Text>
            </View> */}

          </View>
        </View>
        <View style={{ flex: 8, backgroundColor: '#ff0' }}>

        </View>
        {/*  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
        {/* <Menu
          // style={{ backgroundColor: '#ff0' }}
          ref={this.setMenuRef}
          button={<Text onPress={this.showMenu}>Show menu</Text>}
        >
          <MenuItem
            style ={{ borderRadius: 50, backgroundColor: '#ff0'}}
            onPress={this.hideMenu}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 }}
              source={require('./assets/enFlag.png')}
            />
          </MenuItem>
          <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
          <MenuItem onPress={this.hideMenu} disabled>
            Menu item 3
          </MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
        </Menu> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#4289f4',

  },
  header: {
    flex: 2,
    // backgroundColor: '#4289f4',
    alignItems: 'center',
  }
});
