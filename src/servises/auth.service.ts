import { AxiosResponse } from "axios";
import { IAuthResponse } from "@/models/auth.models";
import { $api } from "@/api/intercaptors";

export const login = (login: string,password: string): Promise<AxiosResponse<IAuthResponse>> => {
  return $api.post("/login",{login,password})
}
