import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar w-screen h-16 flex items-center justify-between px-8 bg-neutral-900 text-white">
      <div className="navbar-logo">
        <Link to="/">MovieApp</Link>
      </div>
      <ul className="navbar-links flex flex-row gap-4 ">
        <li>
          <Link
            to="/"
            className="nav-link hover:text-red-500 transition duration-300 ease-in-out">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/favorites"
            className="nav-link hover:text-red-500 transition duration-300 ease-in-out">
            Favorites
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="nav-link hover:text-red-500 transition duration-300 ease-in-out">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
