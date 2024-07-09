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
    <form
      action={`/space-created/${formData.spaceName}`}
      onSubmit={handleSpaceData}
      method="post"
    >
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create a New Space
        </h2>

        <div className="mb-4">
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

        <div className="mb-4">
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

        <div className="mb-6">
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
  )
}

export default NewSpace
