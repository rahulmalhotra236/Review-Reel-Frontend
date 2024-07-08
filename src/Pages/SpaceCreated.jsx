import React from "react"
import { useParams } from "react-router-dom"
import axiosinstance from "../../utils/axiosInstance"

const SpaceCreated = () => {
  const { spaceName } = useParams()

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Added successfully 🥳</h1>
        <p className="text-gray-700 mb-4">
          Here is the link for your customers:
        </p>
        <a href={`/${spaceName}`} className="text-blue-500 hover:underline">
          LINK
        </a>
        <div className="mt-6">
          <button
            onClick={() => setShowCreateTestimonial(!showCreateTestimonial)}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default SpaceCreated
