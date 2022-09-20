import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { useCallback, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  BE_REGULAR,
  BE_MEDIUM,
  BE_SEMIBOLD,
  BE_BOLD,
} from './constants/FontConstant'
import * as SplashScreen from 'expo-splash-screen'
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
  Text,
  TextInput,
} from 'react-native-paper'
import { PRIMARY, SECONDARY, TERTIARY } from './constants/ThemeConstant'

export default function App() {
  const [fontLoaded] = useFonts({
    BE_REGULAR: require('./assets/fonts/BeVietnamPro-Regular.ttf'),
    BE_MEDIUM: require('./assets/fonts/BeVietnamPro-Medium.ttf'),
    BE_SEMIBOLD: require('./assets/fonts/BeVietnamPro-SemiBold.ttf'),
    BE_BOLD: require('./assets/fonts/BeVietnamPro-Bold.ttf'),
  })

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) await SplashScreen.hideAsync()
  }, [fontLoaded])

  if (!fontLoaded) return null

  const _fontConfig = {
    regular: {
      fontFamily: BE_REGULAR,
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: BE_MEDIUM,
      fontWeight: 'normal',
    },
    semibold: {
      fontFamily: BE_SEMIBOLD,
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: BE_BOLD,
      fontWeight: 'normal',
    },
  }

  const fontConfig = {
    ios: _fontConfig,
    android: _fontConfig,
  }

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: PRIMARY,
      secondary: SECONDARY,
      tertiary: TERTIARY,
    },
    fonts: configureFonts(fontConfig),
  }

  return (
    <PaperProvider theme={theme}>
      <View onLayout={onLayoutRootView}>
        <Text style={{ textAlign: 'center' }}>
          Testing line for new Be Vietnam Pro font apply both on React Native
          and React Native Paper
        </Text>
        <TextInput
          label='Test text input in React native paper'
          mode='outlined'
        />
      </View>
    </PaperProvider>
  )
}
