


import { Route, Routes } from "react-router-dom"
import "./App.css"
import CreateTestimonial from "./Pages/CreateTestimonial"
import NewSpace from "./Pages/NewSpace"
import SpaceCreated from "./Pages/SpaceCreated"
import SpaceForm from "./Pages/SpaceForm"

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<SpaceForm/>} /> 
        <Route path="/new-space" element={<NewSpace/>} /> 
        <Route path="/space-created/:spaceName" element={<SpaceCreated/>} /> 
        <Route path="/:spaceName" element={<CreateTestimonial/>} /> 
        <Route path="/products/:spaceName" element={<CreateTestimonial/>} /> 
      </Routes>
     
    </>
  )
}

export default App
