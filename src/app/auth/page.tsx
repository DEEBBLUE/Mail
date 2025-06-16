import { FC } from "react";

const Auth: FC = () => {
  return (
    <main>
      <section className="w-full h-screen flex justify-center items-center">
        <form className="p-[20px] border-[2px] border-black flex flex-col">
          <label className="flex flex-col">
            Login
            <input 
              className="w-[325px] h-[60px] border-[2px] border-black"
              type="text"
            />
          </label>
          <label className=" flex flex-col">
            Password
            <input 
              className="w-[325px] h-[60px] border-[2px] border-black"
              type="text"
            />
          </label>
          <button className="bg-black w-[325px] h-[60px] mt-[10px] text-white" type="submit">LogIn</button>
          <button className="text-[12px] mt-[10px]">Registration</button>
        </form>
      </section>
    </main>
  ) 
}
export default Auth;
