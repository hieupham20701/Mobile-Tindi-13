import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import MenuIcon from '../../../../assets/menu-icon.png'
import SearchIcon from '../../../../assets/search-icon.png'
import { Text } from 'react-native-paper'
import { BE_BOLD } from '../../../../constants/FontConstant'

const DashboardHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={MenuIcon} style={styles.menuIcon} />
      <Text style={styles.header}>Tindi</Text>
      <Image source={SearchIcon} style={styles.searchIcon} />
    </View>
  )
}

export default DashboardHeader

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  header: {
    fontFamily: BE_BOLD,
    fontSize: 23,
    marginLeft: 20,
    color: 'rgb(29,78,216)',
  },
  menuIcon: {
    width: 18,
    height: 15,
    marginTop: 6,
    tintColor: 'black',
    color: 'black',
  },
  searchIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 15,
  },
})
