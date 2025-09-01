import "./css/tailwind.css"
import Favorites from "./pages/Favorites"
import Home from "./pages/Home"
import About from "./pages/About" // add this import
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  // const movieNumber = 1
  return (
    <div>
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
            element={<About />} // add this route
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
