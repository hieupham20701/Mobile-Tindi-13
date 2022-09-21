import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { BE_BOLD, BE_SEMIBOLD } from '../../../constants/FontConstant'
import Button from '../../custom_component/Button'

const LoginForm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput
        nativeID='phone'
        keyboardType='numeric'
        maxLength={10}
        label='Số điện thoại'
        mode='outlined'
        autoFocus
        style={styles.textInput}
      />
      <TextInput
        nativeID='password'
        label='Mật khẩu'
        mode='outlined'
        secureTextEntry={true}
        style={styles.textInput}
      />
      <Text
        style={{ color: 'rgb(29,78,216)', marginTop: 4, fontSize: 15 }}
        onPress={() => {
          navigation.push('ForgetPassword')
        }}
      >
        Quên mật khẩu
      </Text>
      <Button title='Đăng nhập' style={styles.btn} onPress={() => {}} />
      <Text style={{ marginTop: 50, textAlign: 'center' }}>
        <Text>Bạn chưa có tài khoản Tindi?</Text>
        <Text
          style={{ fontFamily: BE_SEMIBOLD, color: '#Bf0659' }}
          onPress={() => {
            navigation.push('Register')
          }}
        >
          {' '}
          Đăng kí ngay nào!
        </Text>
      </Text>
    </View>
  )
}

export default LoginForm

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
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
    marginTop: 15,
  },
})
