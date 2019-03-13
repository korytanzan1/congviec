import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Constants, Font  } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';



export default class App extends React.Component {

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }

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
            fontSize: 18,
            paddingTop: 10,
          }}>
            Translate
          </Text>
          <View style={{
            flexDirection: 'row',
            flex: 1,
            width: '50%',
            color: '#ffffff',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <View style={{
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
            </View>
            <View style={{
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
            </View>

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
    backgroundColor: '#4289f4',
    alignItems: 'center',
  }
});
