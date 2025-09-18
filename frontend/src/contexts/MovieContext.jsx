import { useState, useContext, useEffect } from "react"
import { createContext } from "react"

const MovieContext = createContext()

// If the app a larger scale App, this Hook needs a separate file so the Err Msg will not show. (all fine for now)
export const useMovieContext = () => useContext(MovieContext)

// Provide state to any of the components that are wrapped around it (Allows the components hook in/allows to specific function/state when they need to use it)
export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites")
    if (storedFavs) setFavorites(JSON.parse(storedFavs))
  }, [])

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie])
  }

  const removeFromFavorites = (movieID) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieID))
  }

  const isFavorite = (movieID) => {
    return favorites.some((movie) => movie.id === movieID)
  }

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  }

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}
