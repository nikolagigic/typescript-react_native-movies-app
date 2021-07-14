import React from 'react'

import { Screen } from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { View } from 'react-native'
import { Button } from 'react-native-paper'

import { LoginComponent } from '../LoginComponent/LoginComponent'
import { SignupComponent } from '../SignupComponent/SignupComponent'
import { HomeComponent } from '../HomeComponent/HomeComponent'

const AuthStack = createStackNavigator()
const Drawer = createDrawerNavigator()

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button
        style={{ marginLeft: '25%', marginTop: '5%', width: '50%' }}
        mode="contained"
        onPress={() => navigation.navigate('Sign In')}
      >
        Sign In
      </Button>
      <Button
        style={{ marginLeft: '25%', marginTop: '5%', width: '50%' }}
        mode="contained"
        onPress={() => navigation.navigate('Sign Up')}
      >
        Sign Up
      </Button>
    </View>
  )
}

export const WelcomeComponent = () => {
  let isLoggedIn = AsyncStorage.getItem('loggedIn') != null

  console.log(isLoggedIn)

  return !isLoggedIn ? (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
        <AuthStack.Screen name="Sign In" component={LoginComponent} />
        <AuthStack.Screen name="Sign Up" component={SignupComponent} />
        <AuthStack.Screen
          name="Home"
          component={HomeComponent}
          options={{ headerLeft: () => null, gestureEnabled: false }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeComponent} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
