import * as React from 'react'

import { useNavigation } from '@react-navigation/native'

import { Card, Paragraph } from 'react-native-paper'

import { MovieDetailsInterface } from '../interfaces'

export const CardComponent = ({ props }: any) => {
  const navigation = useNavigation()
  const movie = props

  console.log(movie.popularity)

  return (
    <Card
      style={{ marginHorizontal: '5%', marginVertical: '2.5%' }}
      onPress={() => {
        navigation.navigate('Movie Details', movie)
      }}
    >
      <Card.Title title={movie.original_title} subtitle={movie.title} />
      <Card.Content>
        <Paragraph>{movie.overview}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: movie.poster_path }} />
    </Card>
  )
}
