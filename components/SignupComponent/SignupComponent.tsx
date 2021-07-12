import React from 'react'

import { View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { Divider, TextInput, Button } from 'react-native-paper'

const handleSignup = async (
  fullName: string,
  email: string,
  password: string
) => {
  await AsyncStorage.multiSet([
    ['fullName', fullName],
    ['email', email],
    ['password', password],
  ])
}

export const SignupComponent = () => {
  const [fullName, setFullName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <View style={{ flex: 1, justifyContent: 'center', margin: '5%' }}>
      <TextInput
        autoCapitalize="none"
        mode="outlined"
        label="Full Name"
        value={fullName}
        onChangeText={(fullName) => setFullName(fullName)}
      />
      <TextInput
        autoCapitalize="none"
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <Divider />
      <TextInput
        secureTextEntry={true}
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <Divider />
      <Button
        style={{ marginLeft: '25%', marginTop: '5%', width: '50%' }}
        mode="contained"
        onPress={() => handleSignup(fullName, email, password)}
      >
        Sign Up
      </Button>
    </View>
  )
}
