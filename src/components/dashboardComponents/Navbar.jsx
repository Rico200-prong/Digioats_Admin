import { Bell, CircleUserRound } from "lucide-react";
import React from "react";
import Subheading from "../../context/Subheading";
import Text from "./../../context/Text";

const Navbar = () => {
  return (
    <nav className="  mb-[15px] flex items-center justify-between 2xl:px-[300px] px-[25px] py-[20px] bg-[#2563eb] shadow shadow-blue-950  ">
      <div className="font-[600]">
        <span className="text-[26px]">DigiOats</span>
        <span className="text-white text-[26px] ml-[10px]">Admin</span>
      </div>
      <h3 className="text-[26px] font-[600]">Dashboard</h3>
      <div className="flex items-center gap-x-[15px]">
        <Bell color="white" fill="#2563eb" />
        <CircleUserRound color="white" />
        <div>
          <Subheading subHeading={"Name"} className={"font-semibold"} />
          <Text text={"Administrator"} />
        </div>
        <button className=" px-[15px] py-[10px] bg-[red] text-white font-semibold hover:scale-105 ">
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
