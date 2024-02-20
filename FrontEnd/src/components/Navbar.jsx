import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import toast from "react-hot-toast";

const Navbar = (Props) => {
  let isLoggedIn = Props.isLoggedIn;
  let setIsLoggedIn = Props.setIsLoggedIn;
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          width={160}
          height={32}
          loading="lazy"
          className="text-white"
        />
      </Link>

      <nav>
        <ul className="flex text-white gap-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex ml-5 mr-3 gap-3">
        {!isLoggedIn && (
          <Link to="/signin">
            <button className="border border-[#2C333F] bg-[#161D29] px-[12px] py-[8px] text-[#8C909C] rounded-[8px]">
              Log In
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="border border-[#2C333F] bg-[#161D29] px-[12px] py-[8px] text-[#8C909C] rounded-[8px]">
              Sign Up
            </button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/dashbord">
            <button className="border border-[#2C333F] bg-[#161D29] px-[12px] py-[8px] text-[#8C909C] rounded-[8px]">
              Dashbord
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("logout successfully");
                navi;
              }}
              className="border border-[#2C333F] bg-[#161D29] px-[12px] py-[8px] text-[#8C909C] rounded-[8px]"
            >
              Log Out
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
