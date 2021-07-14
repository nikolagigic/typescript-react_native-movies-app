import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { View } from 'react-native'
import { Button } from 'react-native-paper'

import { LoginComponent } from '../LoginComponent/LoginComponent'
import { SignupComponent } from '../SignupComponent/SignupComponent'
import { MoviesComponent } from '../MoviesComponent/MoviesComponent'

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
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="Sign In" component={LoginComponent} />
      <AuthStack.Screen name="Sign Up" component={SignupComponent} />
      <AuthStack.Screen
        name="Currently Playing Movies"
        component={MoviesComponent}
      />
    </AuthStack.Navigator>
  )
}
