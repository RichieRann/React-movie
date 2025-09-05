const API_Key = "45905b27219cbd98ced85a5a88dfd0d2"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_Key}`)
  const data = await response.json()
  return data.results
}

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_Key}&query=${encodeURIComponent(
      query
    )}`
  )
  const data = await response.json()
  return data.results
}
