import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Constants } from 'expo';
import { Button } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faKeyboard,
  faMicrophoneAlt,
  faSortDown,
  faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons'
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
                <FontAwesomeIcon icon={faKeyboard} color={'white'} />
              </View>
              <Text style={{ color: '#ffffff', fontSize: 15, flex: 1 }}>Text</Text>
            </Button>
            <Button rounded small primary style={{
              backgroundColor: '#6ea5f7',
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <View style={{ alignItems: 'center', flex: 1 }}>
                <FontAwesomeIcon icon={faMicrophoneAlt} color={'white'} />
              </View>
              <Text style={{ color: '#ffffff', fontSize: 15, flex: 1, marginRight: 12 }}>Voice</Text>
            </Button>
          </View>
        </View>
        <View style={{ flex: 8, backgroundColor: '#ff0' }}>
          <View
            style={{
              borderBottomColor: '#e0dbdb',
              borderBottomWidth: 0.5,
            }}
          />
          <View style={styles.menuLanguage}>
            <Button full light large
              style={{
                flex: 2,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                color: '#52575b'
              }}
              onPress={this.showMenu}
            >
              <Menu
                ref={this.setMenuRef}
                button=
                {<Text
                  style={{ color: '#52575b' }}
                >
                  Auto Language</Text>}
              >
                <MenuItem
                  style={{ borderRadius: 50 }}
                  onPress={this.hideMenu}>item
                </MenuItem>
                <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
                <MenuItem onPress={this.hideMenu} disabled>
                  Menu item 3
                </MenuItem>
                <MenuDivider />
                <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
              </Menu>
              <FontAwesomeIcon icon={faSortDown} color={'gray'} />
            </Button>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faExchangeAlt} color={'gray'} size={25} />
            </View>
            <Button full light large
              style={{
                flex: 2,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                color: '#52575b'
              }}
              onPress={this.showMenu}
            >
              <Menu
                ref={this.setMenuRef}
                button=
                {<Text
                  style={{ color: '#52575b' }}
                >
                  English</Text>}
              >
                <MenuItem
                  style={{ borderRadius: 50 }}
                  onPress={this.hideMenu}>item
                </MenuItem>
                <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
                <MenuItem onPress={this.hideMenu} disabled>
                  Menu item 3
                </MenuItem>
                <MenuDivider />
                <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
              </Menu>
              <FontAwesomeIcon icon={faSortDown} color={'gray'} />
            </Button>
          </View>
          <View
            style={{
              borderBottomColor: '#e0dbdb',
              borderBottomWidth: 0.5,
            }}
          />
          <View style={{ flex: 3, backgroundColor: '#ffffff' }}></View>
          <View style={{ flex: 1, backgroundColor: '#ffffff' }}></View>
          <View style={{ flex: 3 }}></View>
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
  },
  menuLanguage: {
    // flex: 1,
    backgroundColor: '#ededed',
    flexDirection: 'row',
  }
});
