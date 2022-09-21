import {
  BE_REGULAR,
  BE_MEDIUM,
  BE_SEMIBOLD,
  BE_BOLD,
} from './constants/FontConstant'
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper'
import { PRIMARY, SECONDARY, TERTIARY } from './constants/ThemeConstant'
import { useFonts } from 'expo-font'
import MainRoute from './routes/MainRoute'

const customFonts = {
  BE_REGULAR: require('./assets/fonts/BeVietnamPro-Regular.ttf'),
  BE_MEDIUM: require('./assets/fonts/BeVietnamPro-Medium.ttf'),
  BE_SEMIBOLD: require('./assets/fonts/BeVietnamPro-SemiBold.ttf'),
  BE_BOLD: require('./assets/fonts/BeVietnamPro-Bold.ttf'),
}

export default function App() {
  let [fontLoaded] = useFonts(customFonts)

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
      <MainRoute />
    </PaperProvider>
  )
}
