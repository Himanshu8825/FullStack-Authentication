// Templete.jsx
import React from "react";
import frameImg from "../assets/frame.png";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import { FcGoogle } from "react-icons/fc";

const Templete = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
      <div className="w-11/12 max-w-450px">
        <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-[#F1F2FF]">
          {title}
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-[#AFB2BF]">{desc1}</span> <br />
          <span className="text-[#47A5C5] italic">{desc2}</span>
        </p>
        {formType === "login" ? (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <SignUpForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-[#161D29]"></div>
          <p className="text-[#161D29] font-medium leading-[1.375rem]">OR</p>
          <div className="h-[1px] w-full bg-[#161D29]"></div>
        </div>
        <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-[#AFB2BF] border border-[#2C333F] px-[12px] py-[8px] gap-x-2  ">
          <FcGoogle />
          <p>SignUp with Google</p>
        </button>
      </div>
      <div className="relative max-w-[450px] w-11/12 ">
        <img
          src={frameImg}
          alt="pattern"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="student"
          width={558}
          height={490}
          loading="lazy"
          className="absolute -top-3 right-3"
        />
      </div>
    </div>
  );
};

export default Templete;
