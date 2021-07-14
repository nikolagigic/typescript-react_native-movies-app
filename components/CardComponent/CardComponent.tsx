import * as React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'

export const CardComponent = () => (
  <Card
    style={{ marginHorizontal: '5%', marginVertical: '2.5%' }}
    onPress={() => {
      console.log('clicked on card')
    }}
  >
    <Card.Title title="Card Title" subtitle="Card Subtitle" />
    <Card.Content>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  </Card>
)
