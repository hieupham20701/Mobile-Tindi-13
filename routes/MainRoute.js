import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen'

const Root = createStackNavigator()

const MainRoute = () => {
  return (
    <NavigationContainer>
      <Root.Navigator
        initialRouteName='Login'
        screenOptions={{ headerShown: false }}
      >
        <Root.Screen name='Login' component={LoginScreen} />
        <Root.Screen name='Register' component={RegisterScreen} />
        <Root.Screen name='ForgetPassword' component={ForgetPasswordScreen} />
      </Root.Navigator>
    </NavigationContainer>
  )
}

export default MainRoute
