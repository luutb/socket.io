import React,{Component} from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginController from './src/component/login/login.controller';
import router from './router.config';

const Stack = createStackNavigator();
export default class App extends Component {
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
          {router.map((e)=>(<Stack.Screen name={e.name} component={e.component}></Stack.Screen>))}
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}
