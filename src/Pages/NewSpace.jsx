import React, { useState } from "react"

import { useNavigate } from "react-router-dom"
import axiosinstance from "../../utils/axiosInstance"

const NewSpace = () => {
  const navigate = useNavigate()

   const [formData, setFormData] = useState({
     spaceName: "",
     headerTitle: "",
     yourCustomMessage: "",
   })
  
    const handleInputChange = (e) => {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
    }


 const handleSpaceData = async (e) => {
    e.preventDefault()

   try {
     await axiosinstance.post("/dashboard/new-space", formData).then((response) => {
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
            Header goes here...
          </h3>
          <p className="text-gray-400">Your custom message goes here...</p>
        </div>
        <div>
          <butto className="bg-[#5C5CFC] text-white px-6 py-4 w-full  cursor-pointer">
            Send in text
          </butto>
        </div>
      </div>
      <form
        action={`/space-created/${formData.spaceName}`}
        onSubmit={handleSpaceData}
        method="post"
      >
        <div className=" mx-auto bg-white  rounded-lg flex flex-col justify-center items-center gap-4 p-6">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Create a New Space
          </h2>
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
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Create Space
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewSpace
