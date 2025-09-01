function MovieCard({ movie }) {
  function onLoveClick() {
    alert("clicked")
  }

  return (
    <div className="movie-card w-80 max-h-[30rem] flex flex-col bg-neutral-800 shadow-lg rounded-lg overflow-hidden relative">
      <div className="movie-poster relative">
        <img
          src={movie.url}
          alt={movie.title}
          className="w-full h-[24rem] object-cover"
        />
        <button
          className="fav-btn absolute bottom-4 right-4 bg-black/60 text-red-500 text-2xl rounded-full size-8 hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
          onClick={onLoveClick}
          aria-label="Add to favorites">
          ♥
        </button>
      </div>
      <div className="movie-details p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-sm text-gray-400">{movie.release_date}</p>
      </div>
    </div>
  )
}

export default MovieCard
