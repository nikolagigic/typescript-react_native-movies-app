import React from 'react'

import { Card, Paragraph, Text } from 'react-native-paper'

import { MovieDetailsInterface } from '../interfaces'

export const MovieDetailsComponent = ({ route }: any) => {
  const props: MovieDetailsInterface = route.params

  return (
    <Card style={{ flex: 1, alignContent: 'center', marginTop: '10%' }}>
      <Card.Cover source={{ uri: props.poster_path }} />
      <Card.Title title={props.original_title} subtitle={props.title} />
      <Card.Content>
        <Paragraph>{props.overview}</Paragraph>
      </Card.Content>
    </Card>
  )
}
