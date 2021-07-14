import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer'

import { View } from 'react-native'
import { Button } from 'react-native-paper'

import { LoginComponent } from '../LoginComponent/LoginComponent'
import { SignupComponent } from '../SignupComponent/SignupComponent'
import { HomeComponent } from '../HomeComponent/HomeComponent'
import { SignOutComponent } from '../SignOutComponent/SignOutComponent'

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

export const WelcomeComponent = (props: any, { navigation }: any) => {
  console.log(props)

  return !props.isLoggedIn ? (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="Sign In" component={LoginComponent} />
      <AuthStack.Screen name="Sign Up" component={SignupComponent} />
      <AuthStack.Screen
        name="Home"
        component={HomeComponent}
        options={{ headerLeft: () => null, gestureEnabled: false }}
      ></AuthStack.Screen>
    </AuthStack.Navigator>
  ) : (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeComponent} />
      <Drawer.Screen name="Sign Out" component={SignOutComponent} />
    </Drawer.Navigator>
  )
}
