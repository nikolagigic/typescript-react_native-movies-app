import axios from 'axios'
import { makeAutoObservable, autorun, runInAction } from 'mobx'

import { MovieDetailsInterface } from '../components/interfaces'

import { constructAPIUrl } from '../helpers/constructAPIUrl'

export const getNowPlayingMovies = () => {
  return axios.get(constructAPIUrl('movie/now_playing'))
}

export const getUpcomingMovies = () => {
  return axios.get(constructAPIUrl('movie/upcoming'))
}

export function createMoviesStore() {
  return {
    movies: [] as MovieDetailsInterface[],
    loadNowPlayingMovies() {
      getNowPlayingMovies().then((res) => {
        runInAction(() => {
          this.movies = res.data.results.map((result: any) => {
            let movie: MovieDetailsInterface = {
              id: result.id,
              overview: result.overview,
              poster_path: result.poster_path,
              title: result.title,
              original_title: result.original_title,
              popularity: result.popularity,
              vote_average: result.vote_average,
              release_date: result.release_date,
            }
            return movie
          })
          this.sortByPopularity()
        })
      })
    },
    loadUpcomingMovies() {
      getUpcomingMovies().then((res) => {
        runInAction(() => {
          this.movies = res.data.results.map((result: any) => {
            let movie: MovieDetailsInterface = {
              id: result.id,
              overview: result.overview,
              poster_path: result.poster_path,
              title: result.title,
              original_title: result.original_title,
              popularity: result.popularity,
              vote_average: result.vote_average,
              release_date: result.release_date,
            }
            return movie
          })
          this.sortByPopularity()
        })
      })
    },
    sortByPopularity() {
      this.movies.sort((x, y): any => {
        return x.popularity > y.popularity
      })
    },
  }
}

export type TMoviesStore = ReturnType<typeof createMoviesStore>
