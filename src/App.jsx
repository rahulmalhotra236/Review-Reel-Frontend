import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import axiosinstance from "../utils/axiosInstance"
import "./App.css"
import Testimonials from "./components/Testimonials"
import CreateTestimonial from "./Pages/CreateTestimonial"
import EditSpace from "./Pages/EditSpace"
import NewSpace from "./Pages/NewSpace"
import ShowSpaceData from "./Pages/ShowSpaceData"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import SpaceCreated from "./Pages/SpaceCreated"
import SpaceForm from "./Pages/SpaceForm"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axiosinstance("/dashboard")
        console.log(data)
        setIsLoggedIn(true)
      } catch (error) {
        setIsLoggedIn(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/signin")
    }
  }, [isLoggedIn, navigate])

  return (
    <>
      {isLoggedIn ? (
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<SpaceForm />} />
          <Route path="/new-space" element={<NewSpace />} />
          <Route path="/space-created/:spaceName" element={<SpaceCreated />} />
          <Route path="/:spaceName" element={<CreateTestimonial />} />
          <Route path="/products/:spaceName" element={<ShowSpaceData />} />
          <Route
            path="/products/:spaceName/edit-testimonial"
            element={<EditSpace />}
          />
          <Route
            path="/testimonial-widget/:spaceName"
            element={<Testimonials />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      )}
    </>
  )
}

export default App
