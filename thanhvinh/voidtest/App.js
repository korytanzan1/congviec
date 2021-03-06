/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import Voice from 'react-native-voice';

import { Permissions } from "expo";


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = {
      recognized: '',
      pitch: '',
      error: '',
      end: '',
      started: '',
      results: [],
      partialResults: [],
    };
    Voice.onSpeechStart = this.onSpeechStart.bind(this)
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this)
    Voice.onSpeechResults = this.onSpeechResults.bind(this)
    Voice.onSpeechEnd = this.onSpeechEnd.bind(this)
    Voice.onSpeechError = this.onSpeechError.bind(this)
    Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this)
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged.bind(this)
  }

  static navigationOptions = {
    header: null,
  };

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  
  async componentDidMount() {
    const { status, expires, permissions } = await Permissions.askAsync(
      Permissions.AUDIO_RECORDING
    );
    if (status !== "granted") {
      //Permissions not granted. Don't show the start recording button because it will cause problems if it's pressed.
      this.setState({showRecordButton: false});
    } else {
      this.setState({showRecordButton: true});
    }
  }

  onSpeechStart(e) {
    this.setState({
      started: '√',
    });
  };
  onSpeechRecognized(e) {
    this.setState({
      recognized: '√',
    });
  };
  onSpeechEnd(e) {
    this.setState({
      end: '√',
    });
  };

  onSpeechError(e) {
    this.setState({
      error: JSON.stringify(e.error),
    });
  };
  onSpeechResults(e) {
    this.setState({
      results: e.value,
    });
  }
  onSpeechPartialResults(e) {
    this.setState({
      partialResults: e.value,
    });
  };

  onSpeechVolumeChanged(e) {
    this.setState({
      pitch: e.value,
    });
  };

  _startRecognizing = () => {

    Voice.start('en-US')
      .then(
        this.setState({
          recognized: '',
          pitch: '',
          error: '',
          started: '',
          results: [],
          partialResults: [],
          end: '',
        }))
      .catch(err => console.log(err));

    // Voice.start('en-US');
    // this.setState({
    //   recognized: '',
    //   pitch: '',
    //   error: '',
    //   started: '',
    //   results: [],
    //   partialResults: [],
    //   end: '',
    // })


    // this.setState({
    //   recognized: '',
    //   pitch: '',
    //   error: '',
    //   started: '',
    //   results: [],
    //   partialResults: [],
    //   end: '',
    // })
    //   .then(Voice.start('en-US'))
    //   .catch(err => console.log(err));

    // try {
    //   await Voice.start('en-US');
    // } catch (e) {
    //   console.error(e);
    // }
  };

  // _stopRecognizing = async () => {
  //   try {
  //     await Voice.stop();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  _stopRecognizing = () => {
    Voice.stop().then(
      this.setState({
        recognized: '',
        pitch: '',
        error: '',
        started: '',
        results: [],
        partialResults: [],
        end: '',
      }))
    .catch(err => console.log(err));
      // .then().catch(e =>
      //   console.error(e))
  };

  // _cancelRecognizing = async () => {
  //   try {
  //     await Voice.cancel();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  _cancelRecognizing = () => {
    Voice.cancel().then().catch(e =>
      console.error(e));
  };

  // _destroyRecognizer = async () => {
  //   try {
  //     await Voice.destroy();
  //   } catch (e) {
  //     console.error(e);
  //   }
  //   this.setState({
  //     recognized: '',
  //     pitch: '',
  //     error: '',
  //     started: '',
  //     results: [],
  //     partialResults: [],
  //     end: '',
  //   });
  // };
  _destroyRecognizer = () => {
    Voice.destroy()
      .then(
        this.setState({
          recognized: '',
          pitch: '',
          error: '',
          started: '',
          results: [],
          partialResults: [],
          end: '',
        })
      )
      .catch(e =>
        console.error(e))
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native Voice!</Text>
        <Text style={styles.instructions}>Press the button and start speaking.</Text>
        <Text style={styles.stat}>{`Started: ${this.state.started}`}</Text>
        <Text style={styles.stat}>{`Recognized: ${this.state.recognized}`}</Text>
        <Text style={styles.stat}>{`Pitch: ${this.state.pitch}`}</Text>
        <Text style={styles.stat}>{`Error: ${this.state.error}`}</Text>
        <Text style={styles.stat}>Results</Text>
        {this.state.results.map((result, index) => {
          return (
            <Text key={`result-${index}`} style={styles.stat}>
              {result}
            </Text>
          );
        })}
        <Text style={styles.stat}>Partial Results</Text>
        {this.state.partialResults.map((result, index) => {
          return (
            <Text key={`partial-result-${index}`} style={styles.stat}>
              {result}
            </Text>
          );
        })}
        <Text style={styles.stat}>{`End: ${this.state.end}`}</Text>
        <TouchableHighlight onPress={this._startRecognizing}>
          <Image style={styles.button} source={require('./button.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={this._stopRecognizing}>
          <Text style={styles.action}>Stop Recognizing</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._cancelRecognizing}>
          <Text style={styles.action}>Cancel</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._destroyRecognizer}>
          <Text style={styles.action}>Destroy</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  action: {
    textAlign: 'center',
    color: '#0000FF',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  stat: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1,
  },
});
