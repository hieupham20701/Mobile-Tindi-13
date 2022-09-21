import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BE_BOLD, BE_MEDIUM } from '../../../constants/FontConstant'

const ForgetPasswordHeader = () => {
  return (
    <View>
      <Text style={styles.header}>Hãy nhập số điện thoại của bạn!</Text>
    </View>
  )
}

export default ForgetPasswordHeader

const styles = StyleSheet.create({
  header: {
    fontFamily: BE_BOLD,
    fontSize: 18,
    textTransform: 'uppercase',
    color: 'rgb(29,78,216)',
  },
})
