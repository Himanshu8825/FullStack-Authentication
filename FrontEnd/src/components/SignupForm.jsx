import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmpassword, setShowConfirmPassword] = useState(false);
  const [accType, setAccType] = useState("student");

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:3001/user/signup", {
      formData,
    });
    if (res.status === 200) {
      setIsLoggedIn(true);
      toast.success("Account Created ");
      navigate("/dashbord");
    }
  };
  return (
    <div>
      <div
        style={{
          boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
        }}
        className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max"
      >
        <button
          className={`${
            accType === "student"
              ? "bg-[#161D29] text-[#F1F2FF]"
              : "bg-transparent text-[#AFB2BF]"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accType === "instructor"
              ? "bg-[#161D29] text-[#F1F2FF]"
              : "bg-transparent text-[#AFB2BF]"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex gap-x-4 mt-[20px]">
          <label className="w-full">
            <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-600">*</sup>
            </p>
            <input
              type="text"
              placeholder="Enter First Name"
              required
              name="firstName"
              onChange={changeHandler}
              value={formData.firstName}
              className="bg-[#161D29] rounded-[0.5rem] text-[#F1F2FF]  w-full p-[12px]"
              style={{
                boxShadow: "rgba(255, 255, 255, 0.18) 0px -1px 0px inset",
              }}
            />
          </label>
          <label className="w-full">
            <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-600">*</sup>
            </p>
            <input
              type="text"
              placeholder="Enter Last Name"
              required
              name="lastName"
              onChange={changeHandler}
              value={formData.lastName}
              className="bg-[#161D29] rounded-[0.5rem] text-[#F1F2FF]  w-full p-[12px]"
              style={{
                boxShadow: "rgba(255, 255, 255, 0.18) 0px -1px 0px inset",
              }}
            />
          </label>
        </div>

        <div className="w-full mt-[20px]">
          <label className="w-full mt-[20px]">
            <p className="text-[1 rem] text-[#F1F2FF] mb-1 mt-1 leading-[1.375rem]">
              Email Address <sup className="text-pink-600">*</sup>
            </p>
            <input
              type="email"
              placeholder="Enter Email Address"
              required
              name="email"
              onChange={changeHandler}
              value={formData.email}
              className="bg-[#161D29] rounded-[0.5rem] text-[#F1F2FF]  w-full p-[12px]"
              style={{
                boxShadow: "rgba(255, 255, 255, 0.18) 0px -1px 0px inset",
              }}
            />
          </label>
        </div>

        <div className="flex gap-x-4 mt-[20px]">
          <label className="w-full relative ">
            <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">
              Create Password <sup className="text-pink-600">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              required
              name="password"
              onChange={changeHandler}
              value={formData.password}
              className="bg-[#161D29] rounded-[0.5rem] text-[#F1F2FF]  w-full p-[12px]"
              style={{
                boxShadow: "rgba(255, 255, 255, 0.18) 0px -1px 0px inset",
              }}
            />
            <span
              className="absolute right-3 top-[46px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-pink-600">*</sup>
            </p>
            <input
              type={showconfirmpassword ? "text" : "password"}
              placeholder="Confirm password"
              required
              name="confirmPassword"
              onChange={changeHandler}
              value={formData.confirmPassword}
              className="bg-[#161D29] rounded-[0.5rem] text-[#F1F2FF]  w-full p-[12px]"
              style={{
                boxShadow: "rgba(255, 255, 255, 0.18) 0px -1px 0px inset",
              }}
            />
            <span
              className="absolute right-3 top-[45px] cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button className="w-full mt-4 rounded-[8px] bg-yellow-500 py-[8px] px-[12px] font-medium ">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
