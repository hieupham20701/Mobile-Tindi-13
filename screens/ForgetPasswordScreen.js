import { StyleSheet, Text, View, Keyboard } from 'react-native'
import React from 'react'
import ForgetPasswordHeader from '../src/components/forget_password/ForgetPasswordHeader'
import ForgetPasswordForm from '../src/components/forget_password/ForgetPasswordForm'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const ForgetPasswordScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ForgetPasswordHeader />
        <ForgetPasswordForm navigation={navigation} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ForgetPasswordScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
})
