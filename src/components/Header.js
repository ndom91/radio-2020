import React from "react"
import Image from "next/image"

const Header = () => {
  return (
    <header className="text-gray-500 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="#"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0 focus:outline-none focus:ring focus:ring-white focus:ring-opacity-70 rounded"
        >
          <div className="bg-newtelco-500 rounded-full flex justify-center items-center h-10 w-10">
            <Image
              src="/img/nt-white.webp"
              height="32"
              width="32"
              layout="fixed"
              alt="Newtelco Logo"
            />
          </div>
          <span className="ml-3 text-xl font-thin">NewTelco GmbH</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
        <a
          href="https://newtelco.com"
          className="focus:outline-none focus:ring focus:ring-white focus:ring-opacity-70 rounded hidden md:inline-flex"
        >
          <button
            className="inline-flex items-center bg-newtelco-500 text-white font-medium border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 transition transition-colors duration-200 ease-in-out rounded text-base mt-4 md:mt-0 hidden md:inline-flex"
            tabIndex="-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home
          </button>
        </a>
      </div>
    </header>
  )
}

export default Header
