import { IAuthResponse } from "@/models/auth.models";
import axios, { AxiosResponse } from "axios";

const baseUrl = "http://localhost:5000"

export function useReg(login: string,password: string): Promise<AxiosResponse<IAuthResponse>> {
  return axios.post(`${baseUrl}/reg`,{
    login: login,
    passwd: password
  }) 
}

export function useLogin(login: string,password: string):Promise<AxiosResponse<IAuthResponse>> {
  return axios.post(`${baseUrl}/login`,{
    login: login,
    passwd: password
  }) 
}

export type AuthFunc = (login: string,password: string) => Promise<AxiosResponse<IAuthResponse>> 

