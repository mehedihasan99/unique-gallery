'use client'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white fixed top-0 right-0 left-0">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Unique Gallery
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex">
          <Link href="/gallery" className="hover:text-gray-300">
            Gallery
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-300 focus:outline-none focus:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
