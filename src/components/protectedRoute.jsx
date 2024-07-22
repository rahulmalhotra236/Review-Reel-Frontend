import { Navigate } from "react-router-dom"
import Cookies from "js-cookie"

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const token = Cookies.get("token") // Adjusted to check cookies for token

  console.log("Token from cookies:", token)
  return token ? Component : <Navigate to="/signin" />
}

export default ProtectedRoute
