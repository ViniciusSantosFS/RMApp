import Axios from "axios"
import { API_BASE_URL } from "@env"

const CANCEL_REQUEST_TIMEOUT_TIME_MS = 5000

const instance = Axios.create({
  baseURL: API_BASE_URL,
  timeout: CANCEL_REQUEST_TIMEOUT_TIME_MS,
})

export default instance
