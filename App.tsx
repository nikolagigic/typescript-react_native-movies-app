/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react'
import { ActivityIndicator, SafeAreaView, View } from 'react-native'

import { AuthContext } from './components/context'

import { styles, backgroundStyle } from './styles'

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [userToken, setUserToken] = React.useState('')

  const authContext = React.useMemo(
    () => ({
      signIn: () => {
        setUserToken('usertoken')
        setIsLoading(false)
      },
      signOut: () => {
        setUserToken('')
        setIsLoading(false)
      },
      signUp: () => {
        setUserToken('usertoken')
        setIsLoading(false)
      },
    }),
    []
  )

  if (isLoading) {
    return (
      <View style={styles.loadingIndicator}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaView style={backgroundStyle}></SafeAreaView>
    </AuthContext.Provider>
  )
}

export default App
