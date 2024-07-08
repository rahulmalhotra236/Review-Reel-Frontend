import React from "react"

const SpaceForm = () => {


 


  return (
    <form action="/new-space" >
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md">
         
         
            <button
              htmlFor="space"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              New Space
            </button>
         
        </div>
      </div>
    </form>
  )
}

export default SpaceForm
