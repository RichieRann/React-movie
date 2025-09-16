import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { searchMovies, getPopularMovies } from "../services/api"
import { ThreeDot } from "react-loading-indicators"

const Home = () => {
  // const [inputValue, setInputValue] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const PopularMovies = await getPopularMovies()
        setMovies(PopularMovies)
      } catch (error) {
        setError("Failed to fetch popular movies")
        console.error("Error:", error)
      } finally {
        setLoading(false)
        console.log("Fetch attempt completed")
      }
    }
    loadPopularMovies()
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    if (loading) return

    setLoading(true)
    try {
      const searchResults = await searchMovies(searchQuery)
      setMovies(searchResults)
      setError(null)
    } catch (error) {
      setError("Failed to search movies")
      console.error("Search Error:", error)
    } finally {
      setLoading(false)
    }

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
            className="search-input text-sm sm:text-base w-2/2 sm:w-2/5 h-8 sm:h-12 p-3 bg-neutral-700 rounded"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="search-button text-center text-sm sm:text-base w-24 h-8 sm:h-12 bg-red-600 text-white hover:bg-red-700 rounded transition duration-300 ease-in-out">
            Search
          </button>
        </form>

        {error && <div className="error mt-6 text-red-500">{error}</div>}
        {loading ? (
          <div className="loading mt-6">
            <ThreeDot
              color="#FF0000"
              size="medium"
              text=""
              textColor=""
            />
          </div>
        ) : (
          <div className="movie-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 mt-6 animate-fade-up">
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
        )}
      </div>
    </>
  )
}

export default Home
