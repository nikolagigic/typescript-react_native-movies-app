import React from 'react'

import { createMoviesStore, TMoviesStore } from '../store/movies'
import { useLocalObservable } from 'mobx-react'

export const AuthContext = React.createContext({})

const moviesStoreContext = React.createContext<TMoviesStore | null>(null)

export const MoviesStoreProvider = ({ children }: any) => {
  const store = useLocalObservable(createMoviesStore)

  return (
    <moviesStoreContext.Provider value={store}>
      {children}
    </moviesStoreContext.Provider>
  )
}

export const useMoviesStore = () => {
  const store = React.useContext(moviesStoreContext)

  if (!store) {
    throw new Error('useMoviesStore must be used within a StoreProvider.')
  }

  return store
}
