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

import AsyncStorage from '@react-native-async-storage/async-storage'

import { WelcomeComponent } from './components/WelcomeComponent/WelcomeComponent'
import { LoginComponent } from './components/LoginComponent/LoginComponent'
import { AuthContext } from './components/context'

import { styles, backgroundStyle } from './styles'

const App = () => {
  const [isLoading, setIsLoading] = React.useState(false)
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
      {userToken === '' ? (
        <WelcomeComponent />
      ) : (
        <SafeAreaView style={backgroundStyle}></SafeAreaView>
      )}
    </AuthContext.Provider>
  )
}

export default App
