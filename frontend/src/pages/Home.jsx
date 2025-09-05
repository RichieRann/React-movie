import MovieCard from "../components/MovieCard"
import { useState, useEffect, use } from "react"
import { searchMovies, getPopularMovies } from "../services/api"

const Home = () => {
  // const [inputValue, setInputValue] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const getPopularMovies = await getPopularMovies()
        setMovies(getPopularMovies)
      } catch (error) {
        setError("Failed to fetch popular movies")
        console.error("Error fetching popular movies:", error)
      } finally {
        setLoading(false)
        console.log("Fetch attempt completed")
      }
    }
    loadPopularMovies()
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchQuery(searchQuery)
  }

  return (
    <>
      <div className="home flex flex-col items-center justify-center p-4">
        <form
          onSubmit={handleSearch}
          className="search-form w-3/4 flex items-center justify-center gap-4 mt-6">
          <input
            type="text"
            placeholder="Search Movies..."
            className="search-input w-2/2 sm:w-2/5 h-12 p-3 bg-neutral-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="search-button text-center w-24 h-12 bg-red-600 text-white hover:bg-red-700 transition duration-300 ease-in-out">
            Search
          </button>
        </form>

        <div className="movie-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard
                  movie={movie}
                  key={movie.id}
                />
              )
          )}
        </div>
      </div>
    </>
  )
}

export default Home
