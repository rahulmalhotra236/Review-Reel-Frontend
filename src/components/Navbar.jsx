import React from 'react'
import { RxAvatar } from "react-icons/rx"

const Navbar = () => {
  return (

      <nav className="flex justify-between items-center">
        <a href='/dashboard' className="text-white text-2xl font-bold">Review Reel</a>
        <RxAvatar className='text-white text-4xl cursor-pointer'/>
      </nav>

  )
}

export default Navbar
