import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import axiosinstance from "../../utils/axiosInstance"
import Navbar from "../components/Navbar"

const ShowSpaceData = () => {
  const { spaceName } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosinstance.get(
        `/testimonial/${spaceName}/all-testimonials`
      )
      console.log(response.data.testimonial)
      setData(response.data.testimonial)
    }

    fetchData()
  }, [spaceName])

  return (
    <div className="flex flex-col  gap-20 min-h-screen bg-[#151719] px-20 py-5">
      <Navbar />

      <div>
        {data.map((d, index) => (
          <div key={index} className="flex justify-between items-center">
            <div>
              <h1 className="text-white text-4xl font-bold mb-2">
                {d.yourName}
              </h1>
              <p className="text-white text-gray-400">
                Space public URL:
                <a href="#" className="underline">
                  LINK
                </a>
              </p>
            </div>

            <div>
              <button className="bg-white rounded-md px-5 py-2">
                Edit Space
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full  p-6">
        <div className="w-1/2 cursor-pointer text-xl font-semibold text-white ">
          Wall of Love
        </div>
        <div className="w-full bg-[#292C30] rounded-lg text-gray-400">
          {data ? (
            data.map((d, index) => (
              <div key={index} className="mb-4 p-10 shadow">
                <p className="text-gray-200">{d.yourTestimonial}</p>
                <br />
                <div className="flex md:justify-between w-1/2">
                  <div>
                    <p>Name</p>
                    <p >{d.yourName}</p>
                  </div>
                  <div>
                    <p>Email</p>
                    <p>{d.yourEmail}</p>
                  </div>
                  
                </div>
                <br />
                <div>
                  <p>Submitted at</p>
                  <p>1/2/2002</p>
                </div>

              </div>
            ))
          ) : (
            <p className="text-gray-500">No testimonials found.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ShowSpaceData
