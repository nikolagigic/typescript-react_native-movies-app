const TMDB_API_URL: string = 'https://api.themoviedb.org/3/'
const TMDB_API_KEY: string = '?api_key=17f5f5163aa189a73040211a1119cea5'

export const constructAPIUrl = (endpoint: string) => {
  return TMDB_API_URL + endpoint + TMDB_API_KEY
}
