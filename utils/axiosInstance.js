import axios from "axios"

const axiosinstance = axios.create({
  baseURL: "http://localhost:3003/api/v1",
  timeout: 10000,
  withCredentials: true,
})

export default axiosinstance
