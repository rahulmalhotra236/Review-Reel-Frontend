import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import axiosinstance from "../../utils/axiosInstance"

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
    <div className="container mx-auto p-4">
      {data ? (
        data.map((d,index) => (
          <div key={index} className="mb-4 p-4 border rounded shadow">
            <h1 className="text-xl font-bold mb-2">{d.yourName}</h1>
            <p className="text-gray-700">{d.yourTestimonial}</p>
            <p className="text-gray-700">{d.yourEmail}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No testimonials found.</p>
      )}
    </div>
  )
}

export default ShowSpaceData
