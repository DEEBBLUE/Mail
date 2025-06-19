"use client";
import { AuthFunc, useLogin, useReg } from "@/hooks/auth";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IForm{
  login: string,
  password: string
}

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [errMsg,setErrMsg] = useState("")
  const { register,handleSubmit,formState: { errors } } = useForm<IForm>()

  const AuthFunc = (login: string,password: string,func: AuthFunc) => {
    func(login,password)
      .then((res) => {
        localStorage.setItem("accessToken",res.data.accessToken)
      })
      .catch((err) => {
        setErrMsg(err)
      })
  }

  const onSubmit: SubmitHandler<IForm> = (data) => {
    if(isLogin){
      AuthFunc(data.login, data.password,useLogin)  
    }else{
      AuthFunc(data.login, data.password,useReg)  
    }
  }

  return (
    <main>
      <section className="w-full h-screen flex justify-center items-center">
        <div className="p-[20px] border-[2px] border-black flex flex-col">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="flex flex-col">
              Login
              <input
                className="w-[325px] h-[60px] border-[2px] border-black"
                type="text"
                { ...register("login",{required: 'Login is required'}) }
              />
            </label>
            <label className=" flex flex-col mt-[5px]">
              Password
              <input
                className="w-[325px] h-[60px] border-[2px] border-black"
                type="text"
                { ...register("password",{required: true}) }
              />
            </label>
            {errors.login && <p>{errors.login.message}</p>}
            <button
              className="bg-black w-[325px] h-[60px] mt-[10px] text-white"
              type="submit"
            >
              { isLogin ? "LogIn" : "Registration" }
            </button>
          </form>
          <button
            className=" text-[12px] mt-[10px]"
            onClick={() => {setIsLogin(!isLogin)}}
          >
            { isLogin ? "Registration" : "LogIn" }
          </button>
        </div>
      </section>
    </main>
  );
};
export default Auth;
