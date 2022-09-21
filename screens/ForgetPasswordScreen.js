import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ForgetPasswordHeader from '../src/components/forget_password/ForgetPasswordHeader'
import ForgetPasswordForm from '../src/components/forget_password/ForgetPasswordForm'

const ForgetPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ForgetPasswordHeader />
      <ForgetPasswordForm navigation={navigation} />
    </View>
  )
}

export default ForgetPasswordScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
})
