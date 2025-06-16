import axios, { CreateAxiosDefaults } from "axios"


const options: CreateAxiosDefaults = {
  baseURL: "http://localhost:5000",
  withCredentials: true,
}

export const $api = axios.create(options)


$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}` 
  return config
})
