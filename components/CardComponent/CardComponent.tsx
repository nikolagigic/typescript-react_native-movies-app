import * as React from 'react'

import { useNavigation } from '@react-navigation/native'

import { Card, Paragraph, Text } from 'react-native-paper'

export const CardComponent = ({ props }: any) => {
  const navigation = useNavigation()
  const movie = props

  return (
    <Card
      style={{ marginHorizontal: '5%', marginVertical: '2.5%' }}
      onPress={() => {
        navigation.navigate('Movie Details', movie)
      }}
    >
      <Card.Title title={movie.original_title} subtitle={movie.title} />
      <Card.Cover source={{ uri: movie.poster_path }} />
      <Card.Content
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: '5%',
          marginTop: '5%',
        }}
      >
        <Text style={{ flex: 1, left: 0 }}>
          Populariy: {Math.trunc(movie.popularity)}
        </Text>
        <Text style={{ flex: 1, right: 0 }}>
          Average Vote: {Math.trunc(movie.vote_average)}
        </Text>
      </Card.Content>
    </Card>
  )
}
