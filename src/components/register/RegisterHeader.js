import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BE_BOLD, BE_MEDIUM } from '../../../constants/FontConstant'

const RegisterHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.header}>Đăng kí dùng</Text>
        <Text style={[styles.header, styles.brandname]}> Tindi</Text>
      </Text>
    </View>
  )
}

export default RegisterHeader

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
