import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axiosInstance from "../../utils/axiosInstance"
import Navbar from "../components/Navbar"
import { RiDeleteBin6Line } from "react-icons/ri"

const SpaceForm = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      console.log("out")
      try {
        const response = await axiosInstance.get("/dashboard")
        console.log("Response data:", response.data.spaces) // Add console.log to check the response structure
        setData(response.data.spaces)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  const handleNewSpaceButton = () => {
    navigate("/new-space")
  }

  const handleDeleteSpace = async (spaceName) => {
    try {
      await axiosInstance.delete(`/dashboard/${spaceName}/delete`)
      setData((prevData) =>
        prevData.filter((space) => space.spaceName !== spaceName)
      )
    } catch (error) {
      console.error("Error deleting space:", error)
    }
  }

  return (
    <div className="flex flex-col gap-20 min-h-screen bg-[#151719] px-20 py-5">
      <Navbar />

      <div className="w-5/6 mx-auto">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
          <h2 className="text-white text-5xl">Spaces</h2>
          <button
            onClick={handleNewSpaceButton}
            className="bg-[#5C5CFC] text-white px-4 py-2 hover:bg-blue-800 mt-3 md:mt-0"
          >
            + Create a new space
          </button>
        </div>

        <div className="mt-10 w-full">
          <div className="flex justify-center items-center p-6">
            <ul className="flex flex-wrap gap-5">
              {data && data.length > 0 ? (
                data.map((space, index) => (
                  <li
                    key={index}
                    className="bg-[#25282C] p-5 border-[.1px] border-white text-xl mb-5 text-3xl rounded-sm w-80 font-semibold cursor-pointer font-light text-white rounded-md flex items-center justify-between"
                  >
                    <span>
                      <a
                        href={`/products/${space.spaceName}`}
                        onClick={() => navigate(`/products/${space.spaceName}`)}
                      >
                        {space.spaceName}
                      </a>
                    </span>
                    <div>
                      <RiDeleteBin6Line
                        className="hover:bg-slate-700 rounded-lg hover:w-5 text-lg"
                        onClick={() => handleDeleteSpace(space.spaceName)}
                      />
                    </div>
                  </li>
                ))
              ) : (
                <div className="flex flex-col gap-10 items-center">
                  <div className="w-full flex justify-center">
                    <img
                      src="https://testimonial.to/static/media/no-message.18de8749.svg"
                      alt="No Space Found"
                      className="w-2/5"
                    />
                  </div>
                  <p className="text-gray-500 text-xl">
                    No space yet, add a new one?
                  </p>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpaceForm
