import {
  AppRegistry,
  Text,
  View,
} from 'react-native';
import React from 'react';
 import { StackNavigator } from 'react-navigation';

export default class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Pulkit',
  };
  render() {
    return (
      <View>
        <Text>Chat with Pulkit</Text>
      </View>
    );
  }
}
