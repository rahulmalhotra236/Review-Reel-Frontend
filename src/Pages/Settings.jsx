import React, { useEffect, useState } from "react"

import Navbar from "../components/Navbar"
import { CgProfile } from "react-icons/cg"
import axiosinstance from "../../utils/axiosInstance"

const Settings = () => {
  const [firstName, setFirstName] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axiosinstance.get("/auth/profile")
        setFirstName(response.data.user.firstName)

        setLoading(false)
      } catch (error) {
        setError("Failed to load profile data")
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  const handleInputChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Add logic to save profile changes here
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="flex flex-col gap-20 min-h-screen bg-[#151719] px-20 py-5">
      <Navbar />

      <div className="text-3xl font-semibold text-white">⚙️ Settings</div>

      <div className="flex w-full gap-10">
        <div className="w-2/5 text-white">
          <ul className="hover:bg-gray-700 hover:rounded px-2 py-1">
            <li className="flex items-center gap-2 text-2xl cursor-pointer">
              <CgProfile />
              Profile
            </li>
          </ul>
        </div>
        <div className="w-3/5 flex flex-col gap-5">
          <h1 className="text-2xl font-bold text-white">Profile</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <label htmlFor="name" className="text-white text-xl font-bold">
              Your name *
            </label>
            <input
              type="text"
              id="name"
              value={firstName}
              onChange={handleInputChange}
              className="bg-[#151719] text-white px-2 py-3 text-xl outline-none border rounded-lg"
            />
            <button
              type="submit"
              className="bg-[#5C5CFC] hover:bg-blue-800 h-12 text-white text-lg w-52"
            >
              Save my profile
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Settings
