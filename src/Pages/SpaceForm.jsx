import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axiosInstance from "../../utils/axiosInstance"
import Navbar from "../components/Navbar"

const SpaceForm = () => {
  const navigate = useNavigate()
    const [data, setData] = useState([])

  useEffect(() => {
      navigate("/dashboard")
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
  const handleNewSpaceButton = () => {
    navigate("/new-space")
  }

  return (
    <div className="flex flex-col  gap-20 min-h-screen bg-[#151719] px-20 py-5">
     
      <Navbar/>

      <div className="w-5/6  mx-auto">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between ">
          <h2 className="text-white text-5xl">Spaces</h2>
          <button
            htmlFor="space"
            onClick={handleNewSpaceButton}
            className="bg-[#5C5CFC] text-white px-4 py-2  hover:bg-blue-800 mt-3 md:mt-0"
          >
            + Create a new space
          </button>
        </div>

        <div className=" mt-10 w-full">
          <div className="flex justify-center items-center p-6 ">
            <ul className="flex flex-wrap gap-5">
              {data.length > 0 ? (
                data.map((space, index) => (
                  <li
                    onClick={() => navigate(`/products/${space.spaceName}`)}
                    key={index}
                    className="bg-[#25282C] p-5 border-[.1px] border-white text-xl mb-5 text-3xl rounded-sm w-80 font-semibold cursor-pointer font-light text-white rounded-md"
                  >
                    <span>
                      <a href={`/products/${space.spaceName}`}>
                        {space.spaceName}
                      </a>
                    </span>
                  </li>
                ))
              ) : (
                <li>No spaces found.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpaceForm
