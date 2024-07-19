


import { Route, Routes, useNavigate } from "react-router-dom"
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
  const navigate= useNavigate()
  return (
    <>
      
      <Routes>
        <Route path="/signup" element={<SignUp/>} /> 
        <Route path="/signin" element={<SignIn/>} /> 
        <Route path="/dashboard" element={<SpaceForm/>} /> 
        <Route path="/" element={<SpaceForm/>} /> 
        <Route path="/new-space" element={<NewSpace/>} /> 
        <Route path="/space-created/:spaceName" element={<SpaceCreated/>} /> 
        <Route path="/:spaceName" element={<CreateTestimonial/>} /> 
        <Route path="/products/:spaceName" element={<ShowSpaceData />} /> 
        <Route path="/products/:spaceName/edit-testimonial" element={<EditSpace />} /> 
        <Route path="/testimonial-widget/:spaceName" element={<Testimonials />} /> 

        
      </Routes>
     
    </>
  )
}

export default App
