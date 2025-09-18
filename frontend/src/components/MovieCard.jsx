import { useMovieContext } from "../contexts/MovieContext"

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()
  const favorite = isFavorite(movie.id)

  // Fav handler
  function onLoveClick(e) {
    e.preventDefault()
    if (favorite) removeFromFavorites(movie.id)
    else addToFavorites(movie)
  }

  return (
    <div className="movie-card sm:w-80 flex flex-col bg-neutral-800 rounded-lg overflow-hidden relative shadow-md border-b-2 border-red-500 hover:shadow-red-500 transition duration-300 ease-in-out ">
      <div className="movie-poster relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full sm:h-[30rem] object-cover"
        />
        <button
          className={`fav-btn absolute bottom-4 right-4 cursor-pointer ${
            favorite
              ? "bg-red-500 text-white"
              : "bg-black/60 text-red-500 hover:bg-red-500 hover:text-white hover:scale-110"
          } text-2xl rounded-full size-8  transition duration-300 ease-in-out`}
          onClick={onLoveClick}
          aria-label="Add to favorites">
          ♥
        </button>
      </div>
      <div className="movie-details h-full px-4 py-2 flex flex-col gap-2">
        <h3 className="text-sm sm:text-xl font-semibold grow">{movie.title}</h3>
        <p className="text-xs sm:text-sm text-gray-400 ">
          {movie.release_date?.split("-")[0]}
        </p>
      </div>
    </div>
  )
}

export default MovieCard
