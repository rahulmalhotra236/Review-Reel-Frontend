import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import axiosinstance from "../../utils/axiosInstance"
import Navbar from "../components/Navbar"
import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"

const ShowSpaceData = () => {
  const { spaceName } = useParams()
  const [data, setData] = useState([])
  const [heartButton, setHeartButton] = useState(false)
  const [wallPreview, setWallPreview] = useState(false)

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

  const toggleHeart = (index) => {
    const updatedData = data.map((d, i) =>
      i === index ? { ...d, liked: !d.liked } : d
    )
    setData(updatedData)
  }

  const handleWallPreview = () => {
    setWallPreview(true)
  }

  return (
    <div className="flex flex-col  gap-20 min-h-screen bg-[#151719] px-20 py-5">
      <Navbar />

      <div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-white text-4xl font-bold mb-2">{spaceName}</h1>
            <p className="text-white text-gray-400">
              Space public URL:
              <a href={`/${spaceName}`} className="underline">
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
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full  p-6">
        <div
          className="w-1/2 flex items-center  cursor-pointer text-xl font-semibold mb-10 text-white"
          onClick={handleWallPreview}
        >
          <FaRegHeart className="mr-2" /> Wall of Love
        </div>
        <div className="w-full   md:flex-col gap-10  text-gray-400">
          {data ? (
            data.map((d, index) => (
              <div
                key={index}
                className=" p-10 mb-10 shadow rounded-lg bg-[#292C30]"
              >
                <div className="flex justify-between">
                  <p className="text-gray-200">{d.yourTestimonial}</p>
                  <button onClick={() => toggleHeart(index)}>
                    {d.liked ? (
                      <FaHeart className="text-2xl cursor-pointer text-red-500" />
                    ) : (
                      <FaRegHeart className="text-2xl cursor-pointer text-red-500" />
                    )}
                  </button>
                </div>
                <br />
                <div className="flex md:justify-between flex-wrap w-1/2">
                  <div className="mb-2 mr-2">
                    <p>Name</p>
                    <p>{d.yourName}</p>
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
                  {wallPreview ? (
                <div className="fixed top-1/4 left-1/4 rounded-xl bg-white w-1/2 h-1/2 p-10">
                    <div className="flex items-center justify-center flex-col gap-5">
                      <h2 className="text-black font-bold text-3xl">
                        Embed a Wall of Love
                      </h2>
                      <p>Customize your Wall of Love</p>

                      <div className="w-full">
                        <textarea className="w-full h-20 border border-2 rounded-md" />
                      </div>

                      <div className="flex gap-5">
                        <button
                          className=" text-gray-800 hover:bg-gray-200 py-2 px-4 rounded-md  transition duration-300 border"
                          onClick={() => setWallPreview(false)}
                        >
                          Close
                        </button>
                        <button className="bg-[#5C5CFC] hover:bg-[#4646dd] text-white  md:px-4 md:py-2  rounded-md cursor-pointer transition duration-300">
                          Copy Code
                        </button>
                      </div>
                    </div>
                    </div>
                  ) : (
                    <div></div>
                  )}

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
