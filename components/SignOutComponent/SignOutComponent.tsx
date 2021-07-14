import React, { useEffect } from 'react'

import { Text } from 'react-native'

import { AuthContext } from '../context'

export const SignOutComponent = () => {
  const { signOut }: any = React.useContext(AuthContext)

  useEffect(() => {
    signOut()
  }, [])

  return (
    <Text style={{ flex: 1, alignItems: 'center', alignContent: 'center' }}>
      Signing Out
    </Text>
  )
}
