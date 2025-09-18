import {createContext, useState, useContext, useEffect} from "react"

cosnt MovieContext = "createContext"

export const useMovieContext = () => useContext(MovieContext)

// Provide state to any of the components that are wrapped around it (Allows the components hook in/allows to specific function/state when they need to use it)
export const MovieProvider = ({children}) => {
const [favorites, setFavorite] = useState([])

useEffect(() =>)

    return <MovieContext.Provider>
        {children}
    </MovieContext.Provider>
}