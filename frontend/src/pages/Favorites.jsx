import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites() {
  const { favorites } = useMovieContext()

  if (favorites && favorites.length > 0) {
    return (
      <div className="home flex flex-col items-center justify-center p-4 mt-10">
        <h2 className="text-white text-2xl font-bold">Your Favorite Movie</h2>
        <div className="movie-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 mt-6 animate-fade-up">
          {favorites.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="favorites-empty h-full mt-40 text-white text-center">
        <h2 className="text-5xl">No Favorite added</h2>
        <p>start adding movies to your favorites first</p>
      </div>
    </>
  )
}
export default Favorites
