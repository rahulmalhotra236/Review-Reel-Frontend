import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import axiosinstance from "../../utils/axiosInstance"

const SpaceCreated = () => {
  const navigate= useNavigate()
  const { spaceName } = useParams()


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white px-12 py-10 rounded shadow-lg max-w-lg w-full text-center">
        <iframe
          src="https://giphy.com/embed/g9582DNuQppxC"
          frameBorder="0"
          className="giphy-embed w-full h-full pointer-events-none"
        ></iframe>
        <h1 className="text-xl font-semibold mb-4">
          Added space name successfully 🥳
        </h1>
        <p className="text-gray-700 mb-4">
          Here is the link for your customers:
        </p>
        <a href={`/${spaceName}`} className="text-blue-500 hover:underline">
          LINK
        </a>
        <div className="mt-6">
          <button
            onClick={() => navigate("/dashboard")}
            // className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            className="bg-[#5C5CFC] hover:bg-[#4646dd] text-white  md:px-4 md:py-2  rounded-lg cursor-pointer transition duration-300 w-full"
          >
            {" "}
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default SpaceCreated
