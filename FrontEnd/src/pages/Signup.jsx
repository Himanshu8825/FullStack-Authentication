import React from "react";
import Templete from "../components/Templete";
import signupImg from "../assets/signup.webp";

const Signup = ({ setIsLoggedIn }) => {
  return (
    <Templete
      title="Join the millions learning to code with studyNotion for free"
      desc1="Build skillsfor today , tomorrow , and beyond"
      desc2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Signup;
