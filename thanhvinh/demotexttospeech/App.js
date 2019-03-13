/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import Speech from 'react-native-speech';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  // speech() {
  //   Speech.speak({
  //     text: 'hi ',
  //     voice: 'en-US'
  //   })
  // }
  _startHandler() {
    Speech.speak({
      text: 'Aujourd\'hui, Maman est morte. Ou peut-être hier, je ne sais pas.',
      voice: 'fr-FR'
    })
    .then(started => {
      console.log('Speech started');
    })
    .catch(error => {
      console.log('You\'ve already started a speech instance.');
    });
  }

  _pauseHandler() {
    Speech.pause();
  }

  _resumeHandler() {
    Speech.resume();
  }

  _stopHandler() {
    Speech.stop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Button onPress={this.speech.bind()}>
          Speak
        </Button>
        <Button onPress={this._pauseHandler}>
          Pause
        </Button>
        <Button onPress={this._resumeHandler}>
          Resume
        </Button>
        <Button onPress={this._stopHandler}>
          Stop
        </Button>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
