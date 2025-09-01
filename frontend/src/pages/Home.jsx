import MovieCard from "../components/MovieCard"
import { useState } from "react"

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("")
  // const [inputValue, setInputValue] = useState("")

  const movies = [
    { id: 1, title: "Inception", release_date: "2010" },
    { id: 2, title: "Interstellar", release_date: "2014" },
    { id: 3, title: "The Dark Knight", release_date: "2008" },
    { id: 4, title: "Tenet", release_date: "2020" },
    { id: 5, title: "Dunkirk", release_date: "2017" },
  ]

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
            className="search-input w-2/5 h-12 p-3 bg-neutral-700"
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
