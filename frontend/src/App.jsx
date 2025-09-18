import "./css/tailwind.css"
import About from "./pages/About"
import Favorites from "./pages/Favorites"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import { MovieProvider } from "./contexts/MovieContext"
import Navbar from "./components/Navbar"

function App() {
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
          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
