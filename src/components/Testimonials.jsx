import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axiosinstance from "../../utils/axiosInstance"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Testimonials = () => {
  const { spaceName } = useParams()
  const [data, setData] = useState([])

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
  }, [spaceName])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      {data.length > 0 ? (
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="p-4 bg-white  rounded-lg shadow-md mx-2">
              <h1 className="text-2xl font-bold mb-2">{d.yourName}</h1>
              <p className="text-gray-700 mb-4">{d.yourTestimonial}</p>
              <p className="text-gray-500">{d.yourEmail}</p>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="text-center text-gray-500">
          No liked Testimonial found
        </div>
      )}
    </div>
  )
}

export default Testimonials
