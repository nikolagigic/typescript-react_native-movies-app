import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { View } from 'react-native'
import { Button } from 'react-native-paper'

import { LoginComponent } from '../LoginComponent/LoginComponent'
import { SignupComponent } from '../SignupComponent/SignupComponent'

const AuthStack = createStackNavigator()

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
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
        <AuthStack.Screen name="Sign In" component={LoginComponent} />
        <AuthStack.Screen name="Sign Up" component={SignupComponent} />
      </AuthStack.Navigator>
    </NavigationContainer>
  )
}
