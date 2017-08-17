import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import  ChatScreen  from './components/ChatScreen.js';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
       const { navigate } = this.props.navigation;
    return (
          <View>
     <Text>Hello, Navigation1!</Text>
    <Button
          onPress={() => navigate('Chat')}
          title="Chat with Pulkit"
        />
   </View>);
  }
}

const FirstProject = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});


AppRegistry.registerComponent('FirstProject', () => FirstProject);
