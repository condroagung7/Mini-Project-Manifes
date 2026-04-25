import axios from "axios"

const API_URL = "https://reqres.in/api"

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    })

    return response.data // { token: "..." }
  } catch (error: any) {
    throw error.response.data // { error: "user not found" }
  }
}