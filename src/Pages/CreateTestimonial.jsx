import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosinstance from "../../utils/axiosInstance"

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {data ? (
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
      )}

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
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                onClick={() => setShowCreateTest(false)}
              >
                Cancel
              </button>
              <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
                Send
              </button>
            </div>
          </div>
        </form>
      )}

      {showSendSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Thank you!
            </h2>
            <p className="text-gray-600 mb-4">
              Thank you so much for your shoutout! It means a ton for us! 🙏
            </p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
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
