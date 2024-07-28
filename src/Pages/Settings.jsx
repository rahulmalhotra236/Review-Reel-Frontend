import React from 'react'
import Navbar from '../components/Navbar'

const Settings = () => {
  return (
    <div className="flex flex-col  gap-20 min-h-screen bg-[#151719] px-20 py-5">
      <Navbar />

      <div className="text-3xl font-semibold text-white">⚙️ Settings</div>

      <div className="flex w-full">
        <div className="bg-red-500 w-2/5">
          <ul>
            <li>Profile</li>
          </ul>
        </div>
        <div className="bg-pink-700 w-3/5 flex flex-col">
          <h1 className="text-xl font-bold">Profile</h1>
          <form action="#" className='flex flex-col'>
            <label htmlFor="name">Your name *</label>
            <input type="text" id="name" value="dfdsfs" />
            <button type='submit'>Save my profile</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Settings
