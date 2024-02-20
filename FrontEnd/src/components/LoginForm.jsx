import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // console.log(formData);
  const changeHandler = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/user/login", {
        formData,
      });
      if (res.status === 200) {
        setIsLoggedIn(true);
        toast.success("Logged in successfully");
        navigate("/dashbord");
      }
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Invalid Password");
      }
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label htmlFor="email" className="w-full">
        <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">
          Email Address <sup className="text-pink-600">*</sup>
        </p>
        <input
          type="email"
          required
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email Address"
          name="email"
          id="email"
          className="bg-[#161D29] rounded-[0.5rem] text-[#F1F2FF]  w-full p-[12px]"
          style={{ boxShadow: "rgba(255, 255, 255, 0.18) 0px -1px 0px inset" }}
        />
      </label>

      <label htmlFor="password" className="w-full relative">
        <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">
          Password <sup className="text-pink-600">*</sup>
        </p>
        <input
          type={showPassword ? "text" : "password"}
          required
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter password"
          name="password"
          id="password"
          className="bg-[#161D29] rounded-[0.5rem] text-[#F1F2FF]  w-full p-[12px]"
          style={{ boxShadow: "rgba(255, 255, 255, 0.18) 0px -1px 0px inset" }}
        />
        <span
          className="absolute right-3 top-[45px] cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="#">
          <p className="mt-1 ml-auto max-w-max text-sm text-blue-400">
            Forgot Password
          </p>
        </Link>
      </label>

      <button className="mt-4 rounded-[8px] bg-yellow-500 py-[8px] px-[12px] font-medium ">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
