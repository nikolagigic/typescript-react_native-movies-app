import React from 'react'

import { View, ScrollView } from 'react-native'
import { Divider } from 'react-native-paper'

import { CardComponent } from '../CardComponent/CardComponent'

export const HomeComponent = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </ScrollView>
  )
}
