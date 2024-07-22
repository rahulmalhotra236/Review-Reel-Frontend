import { Route, Routes } from "react-router-dom"
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
import ProtectedRoute from "./components/protectedRoute" // Adjust path as needed

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/dashboard"
        element={<ProtectedRoute element={<SpaceForm />} />}
      />
      <Route
        path="/new-space"
        element={<ProtectedRoute element={<NewSpace />} />}
      />
      <Route
        path="/space-created/:spaceName"
        element={<ProtectedRoute element={<SpaceCreated />} />}
      />
      <Route
        path="/:spaceName"
        element={<ProtectedRoute element={<CreateTestimonial />} />}
      />
      <Route
        path="/products/:spaceName"
        element={<ProtectedRoute element={<ShowSpaceData />} />}
      />
      <Route
        path="/products/:spaceName/edit-testimonial"
        element={<ProtectedRoute element={<EditSpace />} />}
      />
      <Route
        path="/testimonial-widget/:spaceName"
        element={<ProtectedRoute element={<Testimonials />} />}
      />
    </Routes>
  )
}

export default App
