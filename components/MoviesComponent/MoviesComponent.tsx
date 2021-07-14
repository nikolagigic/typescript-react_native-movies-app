import React from 'react'

import { View, ScrollView } from 'react-native'
import { observer } from 'mobx-react'

import { CardComponent } from '../CardComponent/CardComponent'
import { useMoviesStore, MoviesStoreProvider } from '../context'

import { MovieDetailsInterface } from '../interfaces'

const MoviesScreen = observer(({ props }: any) => {
  const store = useMoviesStore()
  props.name === 'Currently Playing Movies'
    ? store.loadNowPlayingMovies()
    : store.loadUpcomingMovies()

  return (
    <View style={{ flex: 1, paddingTop: '10%' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {store.movies.map((movie: MovieDetailsInterface) => {
          movie.poster_path =
            'https://image.tmdb.org/t/p/w500' + movie.poster_path
          return <CardComponent key={movie.id} props={movie} />
        })}
      </ScrollView>
    </View>
  )
})

export const MoviesComponent = ({ route }: any) => {
  return (
    <MoviesStoreProvider>
      <MoviesScreen props={{ name: route.name }} />
    </MoviesStoreProvider>
  )
}
