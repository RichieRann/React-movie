import "./css/tailwind.css"
import Favorites from "./pages/Favorites"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import { MovieProvider } from "./contexts/MovieContext"
import Navbar from "./components/Navbar"

function App() {
  // const movieNumber = 1
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-container">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/favorites"
            element={<Favorites />}
          />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
