import React from 'react'

import { View, ScrollView } from 'react-native'

import { CardComponent } from '../CardComponent/CardComponent'

export const HomeComponent = () => {
  return (
    <View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </ScrollView>
    </View>
  )
}
