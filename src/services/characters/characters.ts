import axios from "../instance"
import { GetCharsResponse, Result } from "./types"

const BASE_PATH = "character/"

const getChars = async (page: string): Promise<GetCharsResponse> => {
  const { data } = await axios.get(`${BASE_PATH}?page=${page}`)
  return data
}

const getCharById = async (id: string): Promise<Result> => {
  const { data } = await axios.get(`${BASE_PATH}${id}`)
  return data
}

export { getChars, getCharById }
