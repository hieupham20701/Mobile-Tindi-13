import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginBgr from '../assets/login-bgr.jpg'
import LoginHeader from '../src/components/login/LoginHeader'
import LoginForm from '../src/components/login/LoginForm'

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ height: '100%', width: '100%', position: 'relative' }}>
        <ImageBackground
          source={LoginBgr}
          resizeMode='cover'
          style={{ flex: 1, height: '100%' }}
        ></ImageBackground>
        <View style={styles.main}>
          <LoginHeader />
          <LoginForm navigation={navigation} />
        </View>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    width: '100%',
    height: '60%',
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
})
