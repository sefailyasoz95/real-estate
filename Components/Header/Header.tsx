import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <nav className="header sticky top-1 z-50 mx-auto flex w-full flex-row items-center justify-between rounded-lg py-3 px-2 drop-shadow-lg md:w-5/6">
      <div>
        <ul className="flex flex-row items-center justify-center">
          <li className="mx-2 cursor-pointer rounded-md bg-black px-2 py-1 text-white transition-all duration-300 hover:bg-white hover:text-black">
            <a href="/" className="text-lg italic">
              LA Real Estate
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-row items-center justify-center">
          <li className="mx-2 cursor-pointer rounded-md border border-blue-400 px-2 py-1 text-blue-400 transition-all duration-300 hover:scale-110 hover:bg-blue-400 hover:text-white">
            <a href="#">About Us</a>
          </li>
          <li className="mx-2 cursor-pointer rounded-md border border-blue-400 px-2 py-1 text-blue-400 transition-all duration-300 hover:scale-110 hover:bg-blue-400 hover:text-white">
            <a href="#">Customer Experiences</a>
          </li>
          <li className="mx-2 cursor-pointer rounded-md border border-blue-400 px-2 py-1 text-blue-400 transition-all duration-300 hover:scale-110 hover:bg-blue-400 hover:text-white ">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
