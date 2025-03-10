import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosinstance from "../../utils/axiosInstance"
import Navbar from "../components/Navbar"

const CreateTestimonial = () => {
  const [data, setData] = useState(null)
  const { spaceName } = useParams()
  const [showCreateTest, setShowCreateTest] = useState(false)
  const [showSendSuccess, setShowSendSuccess] = useState(false)

  const [formData, setFormData] = useState({
    yourTestimonial: "",
    yourName: "",
    yourEmail: "",
  })
     const handleInputChange = (e) => {
       const { name, value } = e.target
       setFormData({ ...formData, [name]: value })
     }
  

const handleSend = async (e) => {
  e.preventDefault() // Prevent default form submission

  try {
    const response = await axiosinstance.post(
      `/testimonial/${spaceName}/create-testimonial`,
      formData
    )
    console.log(response.data)
    setShowCreateTest(false)
    setShowSendSuccess(true)
    console.log("Send")
  } catch (error) {
    if (error.response) {
      console.error("Server Error:", error.response.data)
    } else if (error.request) {
      console.error("Request Error:", error.request)
    } else {
      console.error("Error:", error.message)
    }
  }
}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosinstance.get(`/dashboard/${spaceName}`)
        console.log(response.data.space)
        setData(response.data.space)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [spaceName])

  useEffect(() => {
    console.log("Updated data:", data)
  }, [data])

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      {data ? (
        <div className=" bg-white  flex md:flex-col justify-center gap-24 items-center">
          <div className="flex flex-col items-center gap-8">
            <h3 className="text-gray-700 font-bold text-7xl">
              {data.headerTitle}
            </h3>
            <p className="text-gray-400">{data.yourCustomMessage}</p>
          </div>
          <div>
            <button
              className="bg-[#5C5CFC] text-white  md:px-6 md:py-4 md:w-full   cursor-pointer text-base p-2"
              onClick={() => setShowCreateTest(true)}
            >
              Create Testimonial
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}

      {/* {data ? (
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            {data.spaceName}
          </h1>
          <h2 className="text-2xl font-semibold mb-2 text-gray-700">
            {data.headerTitle}
          </h2>
          <p className="text-gray-600 mb-4">{data.yourCustomMessage}</p>
          <div className="flex justify-center">
            <button
              className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300"
              onClick={() => setShowCreateTest(true)}
            >
              Create Testimonial
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )} */}

      {showCreateTest && (
        <form
          method="post"
          onSubmit={handleSend}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white w-1/3 h-4/5 flex flex-col p-10 gap-4 rounded-lg shadow-xl border border-gray-300">
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                
                name="yourTestimonial"
                onChange={handleInputChange}
                id="message"
                className="h-32 w-full p-2 rounded-lg border border-gray-300"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                name="yourName"
                type="text"
                onChange={handleInputChange}
                id="name"
                className="w-full p-2 rounded-lg border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Your Email *
              </label>
              <input
                name="yourEmail"
                type="email"
                onChange={handleInputChange}
                id="email"
                className="w-full p-2 rounded-lg border border-gray-300"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                className=" text-gray-800 hover:bg-gray-200 py-2 px-4 rounded-lg  transition duration-300 border"
                onClick={() => setShowCreateTest(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                // className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
                className="bg-[#5C5CFC] hover:bg-[#4646dd] text-white  md:px-4 md:py-2  rounded-lg cursor-pointer transition duration-300"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      )}

      {showSendSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-xl h-96 w-full text-center">
            <iframe src="https://giphy.com/embed/g9582DNuQppxC"   frameBorder="0" className="giphy-embed w-full h-1/2 pointer-events-none" ></iframe>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Thank you!
            </h2>
            <p className="text-gray-600 mb-4">
              Thank you so much for your shoutout! It means a ton for us! 🙏
            </p>
            <button
              className=" text-gray-800 bg-gray-50  hover:bg-gray-100 py-2 px-4 rounded-lg  transition duration-300 border-2 w-full shadow-sm"
              onClick={() => setShowSendSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CreateTestimonial
