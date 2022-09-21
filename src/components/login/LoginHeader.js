import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import { BE_BOLD, BE_MEDIUM } from '../../../constants/FontConstant'

const LoginHeader = () => {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.header}>Đăng nhập với</Text>
        <Text style={[styles.header, styles.brandname]}> Tindi</Text>
      </Text>
    </View>
  )
}

export default LoginHeader

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    fontFamily: BE_MEDIUM,
    fontSize: 30,
    textTransform: 'uppercase',
    color: '#4a4c4d',
  },
  brandname: {
    fontFamily: BE_BOLD,
    color: 'rgb(29,78,216)',
  },
})
