import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { BE_SEMIBOLD } from '../../constants/FontConstant'

const Button = ({ title, onPress = () => {}, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[style, styles.btn]}>
      <Text
        style={{
          color: 'white',
          fontFamily: BE_SEMIBOLD,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
