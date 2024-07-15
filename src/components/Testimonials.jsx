import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axiosinstance from '../../utils/axiosInstance'

const Testimonials = () => {

  const {spaceName} = useParams()
  const [data,setData] = useState([])
  useEffect(() => {

     const fetchData = async () => {
       try {
         const response = await axiosinstance.get(`/widget/${spaceName}`)
         console.log("Response data:", response.data.testimonials) // Add console.log to check the response structure
         setData(response.data.testimonials)
       } catch (error) {
         console.error("Error fetching data:", error)
       }
     }

     fetchData()
   }, [])
  return (
    <div>
      {data ? (
        <div>
          {data.map((d, index) => (
            <div key={index}>
              <h1>{d.yourName}</h1>
              <p>{d.yourTestimonial}</p>
              <p>{d.yourEmail}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>No liked Testimonial found</div>
      )}
    </div>
  )
}

export default Testimonials
