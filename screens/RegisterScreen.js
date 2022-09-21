import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RegisterHeader from '../src/components/register/RegisterHeader'
import RegisterForm from '../src/components/register/RegisterForm'
import RegisterBgr from '../assets/register-bgr.jpg'

const RegisterScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={{ height: '100%', width: '100%', position: 'relative' }}>
        <ImageBackground
          source={RegisterBgr}
          resizeMode='cover'
          style={{ flex: 1, height: '100%' }}
        ></ImageBackground>
        <View style={styles.main}>
          <RegisterHeader />
          <RegisterForm navigation={navigation} />
        </View>
      </View>
    </View>
  )
}

export default RegisterScreen

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
    paddingTop: 20,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
})
