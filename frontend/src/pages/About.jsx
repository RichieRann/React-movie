const About = () => {
  return (
    <>
      <div className="flex flex-col w-full text-white text-justify items-center justify-center min-h-[60vh] p-8">
        <h2 className="text-3xl font-bold mb-4">About This App</h2>
        <p className="max-w-xl text-lg mb-2">
          <strong>React Movie App</strong> is a personal learning project by{" "}
          <span className="text-red-400 font-semibold">RichieRann</span>.
          <br />
          This app lets you browse popular movies, search for specific titles,
          and mark your favorites for easy access.
          <br />
          It features a clean, responsive UI built with{" "}
          <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">Vite</span>, and{" "}
          <span className="font-semibold">Tailwind CSS</span>.
          <br />
          All movie data is fetched from the TMDB API, and your favorites are
          saved locally.
        </p>
        <p className="mt-4 text-base">
          <strong>Author:</strong> RichieRann
          <br />
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/RichieRann"
            className="text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer">
            github.com/RichieRann
          </a>
        </p>
      </div>
    </>
  )
}

export default About
