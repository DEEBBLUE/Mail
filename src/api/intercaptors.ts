import axios, { CreateAxiosDefaults } from "axios"

const Url = "http://localhost:5000"

const options: CreateAxiosDefaults = {
  baseURL: Url,
  withCredentials: true,
}

export const $api = axios.create(options)

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}` 
  return config
})

$api.interceptors.response.use((config) => {
  return config
},async (err) => {
  const originalRequest = err.config;

  if(err.response.status === 401 && err.config && !err.config._isRetry) {
      originalRequest._isRetry = true;
      try {
          const response = await axios.get(`${Url}/refresh`, {
            withCredentials: true
          })
          localStorage.setItem('token', response.data.accessToken);
          return $api.request(originalRequest);
      }catch (err){
          console.log('НЕ АВТОРИЗОВАН')
          console.log(err);
      }
  }
  throw err; 
})
