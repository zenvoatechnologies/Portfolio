import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 text-white">
      <div className="max-w-4xl text-center p-8">
        <h1 className="text-5xl font-extrabold">We Build Websites That Build Businesses</h1>
        <p className="mt-4 text-lg">
          Custom development + lifetime support. Fast, secure & conversion-focused builds.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link to="/contact" className="px-6 py-3 bg-white text-black rounded-lg">
            Get a Free Quote
          </Link>

          <Link to="/portfolio" className="px-6 py-3 border border-white rounded-lg">
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}
