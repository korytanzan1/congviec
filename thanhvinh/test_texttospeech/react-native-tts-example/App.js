import React from 'react';
import {
  Text,
  Button,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Keyboard,
  Image,
} from 'react-native';
import { Constants, Speech } from 'expo';
import Touchable from 'react-native-platform-touchable';

const STARTLANGUAGE = [
  { language: 'en', text: 'én lịch' },
  { language: 'zh-CN', text: 'khựa' },
  { language: 'vi', text: 'đảng' },
  { language: 'th', text: 'thái' },
  { language: 'ja', text: 'JAV' },

];
const ENDLANGUAGE = [
  { language: 'en', text: 'én lịch' },
  { language: 'zh-CN', text: 'khựa' },
  { language: 'vi', text: 'đảng' },
  { language: 'th', text: 'thái' },
  { language: 'ja', text: 'JAV' },

];

if (!Constants.isDevice) {
  alert(
    'Hey, this will not work on the Appetize preview! Open it on your device'
  );
}

export default class TextToSpeechScreen extends React.Component {
  static navigationOptions = {
    title: 'Speech',
  };

  _fetchApitranslate = () => {
    const url =
      'https://translate.googleapis.com/translate_a/single?client=gtx&sl=' +
      this.state.selectedStartLanguage.language +
      '&tl=' +
      this.state.selectedEndLanguage.language +
      '&dt=t&q=' +
      this.state.text;
    console.log(url);
    return fetch(
      url
    )
      .then(response => response.json())
      .then(responseJson => {

        this.setState(
          {
            isLoading: false,
            result: responseJson[0][0][0],
          },
          function() {}
        );
        console.log(responseJson[0][0][0]);
      })
      .catch(error => {
        console.error(error);
      });
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      result: '',
      text: '',
      selectedStartLanguage: STARTLANGUAGE[0],
      selectedEndLanguage: ENDLANGUAGE[0],
      pitch: 1,
      rate: 0.75,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Select a language translate </Text>
        </View>

        <View style={styles.translateContainer}>
          <View
            style={{
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 20,
              flex: 1,
              alignItems: 'center',
            }}>
            <Text>From</Text>
            <ScrollView style={{}}>
              {STARTLANGUAGE.map(this._renderStartLanguage)}
            </ScrollView>
          </View>
          <Image source={require('./assets/translate.png')} />
          <View
            style={{
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 20,
              flex: 1,
              alignItems: 'center',
            }}>
            <Text>To</Text>

            <ScrollView>{ENDLANGUAGE.map(this._renderEndLanguage)}</ScrollView>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.controlRow}>
          <Button onPress={this._speak} title="Speak" />

          <Button onPress={this._fetchApitranslate} title="Translate" />
        </View>
        <View style={{ alignItems: 'center', flexDirection: 'row', flex: 1 }}>
          <TextInput
            style={styles.textInput}
            multiline={true}

            onChangeText={text => this.setState({ text })}
            onSubmitEditing = {Keyboard.dismiss()}       
               />
          <Image source={require('./assets/translate.png')} />
          <Text
            style={{
              flex: 1,
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 20,
              padding: 10,
              height: 100,
            }} onPress= {this._speak}>
            {this.state.result}
          </Text>
        </View>
        <View style={{ flex: 2 }} />
      </View>
    );
  }

  _speak = () => {
    const start = () => {};
    const complete = () => {};

    Speech.speak(this.state.result, {
      language: this.state.selectedEndLanguage.language,
      pitch: this.state.pitch,
      rate: this.state.rate,
      onStart: start,
      onDone: complete,
      onStopped: complete,
      onError: complete,
    });
    console.log("speak");
  };

  _renderStartLanguage = (language, i) => {
    let { selectedStartLanguage } = this.state;
    let isSelected = selectedStartLanguage === language;

    return (
      <Touchable
        key={i}
        hitSlop={{ top: 10, bottom: 10, left: 20, right: 20 }}
        onPress={() => this._selectStartLanguage(language)}>
        <Text style={[styles.translateText, isSelected && styles.selectedText]}>
          {language.text} ({language.language})
        </Text>
      </Touchable>
    );
  };
  _selectStartLanguage = language => {
    this.setState({ selectedStartLanguage: language });
  };
  _renderEndLanguage = (language, i) => { 
    let { selectedEndLanguage } = this.state;
    let isSelected = selectedEndLanguage === language;

    return (
      <Touchable
        key={i}
        hitSlop={{ top: 10, bottom: 10, left: 20, right: 20 }}
        onPress={() => this._selectEndLanguage(language)}>
        <Text style={[styles.translateText, isSelected && styles.selectedText]}>
          {language.text} ({language.language})
        </Text>
      </Touchable>
    );
  };

  _selectEndLanguage = language => {
    this.setState({ selectedEndLanguage: language });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    padding: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginTop: 0,
    marginBottom: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginHorizontal: 20,
    marginBottom: 0,
    marginTop: 20,
  },
  translateText: {
    fontSize: 15,
    color: '#ccc',
    marginVertical: 10,
  },
  translateContainer: {
    paddingTop: 15,
    paddingBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedText: {
    color: 'black',
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    height: 100,
    flex: 1,
  },
  controlRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
