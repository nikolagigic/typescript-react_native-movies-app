import React from 'react'

import { View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { Divider, TextInput, Button } from 'react-native-paper'

import { AuthContext } from '../context'

function handleLogIn(email: string, password: string) {
  return AsyncStorage.multiGet(['email', 'password']).then((res) => {
    const getEmail = res[0][1]
    const getPassword = res[1][1]

    if (getEmail === email && getPassword === password) {
      return true
    } else {
      return false
    }
  })
}

export const LoginComponent = ({ navigation }: any) => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const { signIn }: any = React.useContext(AuthContext)

  return (
    <View style={{ flex: 1, justifyContent: 'center', margin: '5%' }}>
      <TextInput
        autoCapitalize="none"
        mode="outlined"
        label="Email"
        value={username}
        onChangeText={(username) => setUsername(username)}
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
        onPress={() => {
          handleLogIn(username, password).then((isLoggedIn) => {
            if (isLoggedIn) {
              signIn()
              navigation.navigate('Currently Playing Movies')
            }
          })
        }}
      >
        Log In
      </Button>
    </View>
  )
}
