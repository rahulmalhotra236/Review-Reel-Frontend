import React from 'react'
import Navbar from '../components/Navbar'

const SignUp = () => {
  return (
    <div className="flex flex-col  gap-20 min-h-screen bg-[#151719] px-20 py-5">
      <Navbar />
      <div className="flex justify-center flex-col items-center gap-10">
        <h1 className="text-white font-bold text-3xl">Sign up for free 🤗</h1>
        <div className="w-1/3">
          <form
            method='post'
            action="#"
            className="flex justify-center flex-col gap-2 w-full"
          >
            <label htmlFor="first-name" className="text-white">
              First name *
            </label>
            <input
              type="text"
              id="first-name"
              placeholder="Your first name"
              className="h-10 p-5"
            />
            <br />
            <label htmlFor="first-name" className="text-white">
              Email *
            </label>
            <input
              type="text"
              id="first-name"
              placeholder="Your@example.com"
              className="h-10 p-5"
            />
            <br />
            <label htmlFor="first-name" className="text-white">
              Password *
            </label>
            <input
              type="text"
              id="first-name"
              placeholder="Password"
              className="h-10 p-5"
            />
            <br />
            <button className="bg-[#5C5CFC] hover:bg-blue-800 h-12 text-white text-lg ">
              Sign Up
            </button>
            <br />
            <p className="text-slate-500 text-center">
              Already have an account?{" "}
              <a  href="#" className="text-[#5C5CFC] cursor-pointer hover:text-white">Sign in</a>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
