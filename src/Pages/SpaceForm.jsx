import React, { useState, useEffect } from "react"
import axiosInstance from "../../utils/axiosInstance"

const SpaceForm = () => {
    const [data, setData] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axiosInstance.get("/dashboard")
          console.log("Response data:", response.data.space) // Add console.log to check the response structure
          setData(response.data.space)
        } catch (error) {
          console.error("Error fetching data:", error)
        }
      }

      fetchData()
    }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">All Spaces</h2>
        <ul>
          {data.length > 0 ? (
            data.map((space, index) => (
              <li key={index} className="mb-2">
                <span className="font-bold">
                  <a href="#">{space.spaceName}</a>
                </span>
              </li>
            ))
          ) : (
            <li>No spaces found.</li>
          )}
        </ul>
        <form action="/new-space">
          <button
            htmlFor="space"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4"
          >
            New Space
          </button>
        </form>
      </div>
    </div>
  )
}

export default SpaceForm
