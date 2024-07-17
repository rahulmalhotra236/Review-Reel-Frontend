import React, { useEffect, useState } from "react"

import { useNavigate, useParams } from "react-router-dom"
import axiosinstance from "../../utils/axiosInstance"

const EditSpace = () => {
  const navigate = useNavigate()
  const { spaceName } = useParams()
  const [data, setData] = useState([])
  const [formData, setFormData] = useState({
    spaceName: `${data.spaceName}`,
    headerTitle: ``,
    yourCustomMessage: "",
  })

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosinstance.get(`dashboard/${spaceName}`)
      console.log(response.data.space)
      // setData(response.data.space)
       setFormData({
         spaceName: response.data.space.spaceName,
         headerTitle: response.data.space.headerTitle,
         yourCustomMessage: response.data.space.yourCustomMessage,
       })
    }
    fetchData()
  },[])


  

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSpaceData = async (e) => {
    e.preventDefault()

    try {
      await axiosinstance
        .put(`/testimonial/${spaceName}/edit-space`, formData)
        .then((response) => {
          console.log(response.data)
        })
    } catch (error) {
      console.log(`Error ${error}`)
    }

    navigate(`/space-created/${formData.spaceName}`)
  }

  return (
    <div className=" mx-36 my-10 flex gap-16 shadow-2xl justify-center rounded-lg py-10 px-8">
      <div className="w-1/2 border rounded-lg p-10 flex flex-col justify-center gap-20 items-center">
        <div className="flex flex-col items-center gap-5">
          <h3 className="text-gray-700 font-bold text-4xl">
            {formData.headerTitle || "Header goes here..."}
          </h3>
          <p className="text-gray-400">
            {formData.yourCustomMessage || "Header goes here..."}
          </p>
        </div>
        <div>
          <button className="bg-[#5C5CFC] text-white px-6 py-4 w-full  cursor-pointer">
            Send in text
          </button>
        </div>
      </div>
      <form
        action={`/space-created/${formData.spaceName}`}
        onSubmit={handleSpaceData}
        method="post"
      >
        <div className=" mx-auto bg-white  rounded-lg flex flex-col justify-center items-center gap-4 p-6">
          <h2 className="text-4xl font-bold mb-6 text-center">Edit Space</h2>
          <p className="text-slate-500 ">
            After the Space is created, it will generate a dedicated page for
            collecting testimonials.
          </p>

          <div className="mb-4 w-full">
            <label
              htmlFor="space-name"
              className="block text-gray-700 font-medium mb-2"
            >
              Space Name
            </label>
            <input
              value={formData.spaceName}
              required
              type="text"
              id="space-name"
              name="spaceName"
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="header-title"
              className="block text-gray-700 font-medium mb-2"
            >
              Header Title
            </label>
            <input
              value={formData.headerTitle}
              required
              type="text"
              id="header-title"
              name="headerTitle"
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6 w-full">
            <label
              htmlFor="your-custom-message"
              className="block text-gray-700 font-medium mb-2"
            >
              Your Custom Message
            </label>
            <input
              value={formData.yourCustomMessage}
              required
              type="text"
              id="your-custom-message"
              name="yourCustomMessage"
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className=" transition duration-300 w-full bg-[#5C5CFC] text-white px-4 py-2  hover:bg-blue-800 mt-3 md:mt-0"
          >
            Update Space
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditSpace
