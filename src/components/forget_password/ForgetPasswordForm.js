import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, TextInput } from 'react-native-paper'
import { BE_BOLD, BE_MEDIUM } from '../../../constants/FontConstant'
import Button from '../../custom_component/Button'

const ForgetPasswordForm = ({ navigation }) => {
  return (
    <View style={{ width: '100%', marginTop: 30 }}>
      <TextInput
        keyboardType='numeric'
        mode='outlined'
        style={styles.textInput}
        autoFocus
      />
      <Button title='Tiếp tục' style={styles.btn} />
      <Text
        style={{
          fontFamily: BE_MEDIUM,
          textAlign: 'center',
          marginTop: 20,
          color: 'rgb(29,78,216)',
        }}
        onPress={() => {
          navigation.goBack()
        }}
      >
        Quay lại đăng nhập
      </Text>
    </View>
  )
}

export default ForgetPasswordForm

const styles = StyleSheet.create({
  textInput: {
    height: 55,
    width: '100%',
    color: 'red',
    fontFamily: BE_BOLD,
    marginBottom: 5,
    backgroundColor: 'white',
  },
  btn: {
    backgroundColor: 'rgb(29,78,216)',
    paddingVertical: 15,
    borderRadius: 10,
    fontSize: 17,
    marginTop: 20,
  },
})
