"use client";
import { FC, useState } from "react";

type Auth = "reg" | "login";

const Auth: FC = () => {
  const [authState, setAuthState] = useState<Auth>("login");
  return (
    <main>
      <section className="w-full h-screen flex justify-center items-center">
        <div className="p-[20px] border-[2px] border-black flex flex-col">
          <form>
            <label className="flex flex-col">
              Login
              <input
                className="w-[325px] h-[60px] border-[2px] border-black"
                type="text"
              />
            </label>
            <label className=" flex flex-col mt-[5px]">
              Password
              <input
                className="w-[325px] h-[60px] border-[2px] border-black"
                type="text"
              />
            </label>
            <button
              className="bg-black w-[325px] h-[60px] mt-[10px] text-white"
              type="submit"
            >
              {authState === "login" ? "LogIn" : "Registration"}
            </button>
          </form>
          <button
            className=" text-[12px] mt-[10px]"
            onClick={() => {
              authState === "login" ? setAuthState("reg") : setAuthState("login")
            }}
          >
            {authState === "login" ? "Registration" : "LogIn"}
          </button>
        </div>
      </section>
    </main>
  );
};
export default Auth;
