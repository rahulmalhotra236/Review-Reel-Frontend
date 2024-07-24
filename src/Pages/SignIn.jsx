import React, { useState } from "react"
import { toast, Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import axiosinstance from "../../utils/axiosInstance"

import Navbar from "../components/Navbar"

const SignIn = ({ setIsLoggedIn }) => {
  // Accept setIsLoggedIn as a prop
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    try {
      toast.success("Signin Successful")
      const response = await axiosinstance.post("/auth/signin", formData)
      console.log("Response:", response.data) // Add this line
      setSuccess(response.data.message)
      setIsLoggedIn(true) // Set logged-in state
      navigate("/dashboard")
    } catch (err) {
      console.log("Error:", err) // Add this line
      setError(err.response ? err.response.data.message : "Server error")
    }
  }

  return (
    <div className="flex flex-col gap-20 min-h-screen bg-[#151719] px-20 py-5">
      <Navbar />
      <div className="flex justify-center flex-col items-center gap-10">
        <Toaster />
        <h1 className="text-white font-bold text-3xl">Sign in for free 🤗</h1>
        <div className="w-1/3">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-col gap-2 w-full"
          >
            <label htmlFor="email" className="text-white">
              Email *
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your@example.com"
              className="h-10 p-5"
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="password" className="text-white">
              Password *
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="h-10 p-5"
              value={formData.password}
              onChange={handleChange}
            />
            <br />
            <button
              type="submit"
              className="bg-[#5C5CFC] hover:bg-blue-800 h-12 text-white text-lg "
            >
              Sign In
            </button>
            <br />
            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && <p className="text-green-500 text-center">{success}</p>}
            <p className="text-slate-500 text-center">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-[#5C5CFC] cursor-pointer hover:text-white"
              >
                Sign up
              </a>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
