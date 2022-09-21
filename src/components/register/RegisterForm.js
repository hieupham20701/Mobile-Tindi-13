import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import Button from '../../custom_component/Button'
import { BE_BOLD, BE_MEDIUM } from '../../../constants/FontConstant'

const RegisterForm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput
        nativeID='phone'
        keyboardType='numeric'
        maxLength={10}
        label='Số điện thoại của bạn'
        mode='outlined'
        autoFocus={true}
        style={styles.textInput}
      />
      <TextInput
        nativeID='name'
        keyboardType='default'
        label='Tên bạn muốn hiển thị'
        mode='outlined'
        style={styles.textInput}
      />
      <TextInput
        nativeID='password'
        label='Mật khẩu'
        mode='outlined'
        secureTextEntry={true}
        style={styles.textInput}
      />
      <Button title='Đăng kí thôi!' style={styles.btn} onPress={() => {}} />
      <Text style={{ marginTop: 50, textAlign: 'center' }}>
        <Text>Đã có tài khoản Tindi rồi?</Text>
        <Text
          style={{ fontFamily: BE_MEDIUM, color: 'rgb(29,78,216)' }}
          onPress={() => {
            navigation.goBack()
          }}
        >
          {' '}
          Đăng nhập thôi!
        </Text>
      </Text>
    </View>
  )
}

export default RegisterForm

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
    backgroundColor: '#Bf0659',
    paddingVertical: 15,
    borderRadius: 10,
    fontSize: 17,
    marginTop: 15,
  },
})
