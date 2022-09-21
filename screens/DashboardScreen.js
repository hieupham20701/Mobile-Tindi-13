import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DashboardHeader from '../src/components/dashboard/dashboard_header/DashboardHeader'
import Message from '../src/components/dashboard/messages/Message'

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <DashboardHeader />
      <Message />
    </View>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 10,
  },
})
