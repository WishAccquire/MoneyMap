"use client";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";


export default function SignInPage() {
  return (
   
        <div className=" mx-auto flex flex-row h-screen w-[1400px]  justify-center items-center gap-8">
        <div className="w-[40%] h-full flex flex-col justify-center items-center">
        <h1 className="text-2xl text-gray-900 font-medium mb-6">
          Welcome to MoneyMate
        </h1>
        <SignIn />   
      </div>
      <div className="w-[60%] p-6 relative h-full mt-4 ">
        <Image
          src={'/sign_pic.png'}
          alt="dashboard"
          width={1000}
          height={1000}
          className=" h-[100%] w-full  object-cover "
        />
      </div>
      </div>
      
    
  );
} 