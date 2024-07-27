import React, { useState } from "react"
import { RxAvatar } from "react-icons/rx"

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <nav className="flex justify-between items-center p-4">
      <a href="/dashboard" className="text-white text-2xl font-bold">
        Review Reel
      </a>
      <div className="relative">
        <RxAvatar
          className="text-white text-4xl cursor-pointer"
          onClick={handleToggleDropdown}
        />
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-[#25282C] border border-slate-700 rounded-md shadow-lg py-2">
            <a
              href="/dashboard"
              className="block px-4 py-2 text-slate-300 hover:bg-[#33363A]"
            >
              Dashboard
            </a>
            <a
              href="/settings"
              className="block px-4 py-2 text-slate-300 hover:bg-[#33363A]"
            >
              Settings
            </a>
            <div className="border-b border-b-slate-700 bg-bottom" />
            <a
              href="/signout"
              className="block px-4 py-2 text-slate-300 hover:bg-[#33363A]"
            >
              Sign Out
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
