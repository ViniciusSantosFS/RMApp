import Axios from "axios"
import { API_BASE_URL } from "@env"

const instance = Axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
})

export default instance
