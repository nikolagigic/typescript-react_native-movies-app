import { StyleSheet, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const isDarkMode = useColorScheme() === 'dark'
export const backgroundStyle = {
  backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
}

export const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
