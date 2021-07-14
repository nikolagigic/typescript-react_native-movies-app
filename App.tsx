/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import { WelcomeComponent } from './components/WelcomeComponent/WelcomeComponent'
import { MoviesComponent } from './components/MoviesComponent/MoviesComponent'
import { SignOutComponent } from './components/SignOutComponent/SignOutComponent'
import { MovieDetailsComponent } from './components/MovieDetailsComponent/MovieDetailsComponent'

import { AuthContext } from './components/context'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { styles } from './styles'

const Drawer = createDrawerNavigator()

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
      <NavigationContainer>
        {userToken === '' ? (
          <WelcomeComponent />
        ) : (
          <Drawer.Navigator initialRouteName="Currently Playing Movies">
            <Drawer.Screen
              name="Currently Playing Movies"
              component={MoviesComponent}
            />
            <Drawer.Screen name="Upcoming Movies" component={MoviesComponent} />
            <Drawer.Screen name="Sign Out" component={SignOutComponent} />
            <Drawer.Screen
              name="Movie Details"
              component={MovieDetailsComponent}
              options={{
                drawerLabel: () => null,
                drawerIcon: () => null,
                title: null,
              }}
            />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default App
