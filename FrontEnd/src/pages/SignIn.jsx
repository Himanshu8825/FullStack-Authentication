import React from "react";
import Templete from "../components/Templete";
import loginImg from "../assets/login.webp";
import LoginForm from "../components/LoginForm";

const SignIn = ({ setIsLoggedIn }) => {
  return (
    <Templete
      title="Welcome Back "
      desc1="Build skillsfor today , tomorrow , and beyond"
      desc2="Education to future-proof your career."
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default SignIn;
