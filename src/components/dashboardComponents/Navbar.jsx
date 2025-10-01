import { Bell, CircleUserRound } from "lucide-react";
import React from "react";
import Subheading from "../../context/Subheading";
import Text from "./../../context/Text";

const Navbar = () => {
  return (
    <nav className=" mt-[30px] mb-[15px] flex items-center justify-between ">
      <div className="font-[600]">
        <span className="text-[26px]">DigiOats</span>
        <span className="text-[#2563eb] text-[26px] ml-[10px]">Admin</span>
      </div>
      <h3 className="text-[26px] font-[600]">Dashboard</h3>
      <div className="flex items-center gap-x-[15px]">
        <Bell color="#2563eb" fill="#2563eb" />
        <CircleUserRound />
        <div>
          <Subheading subHeading={"Name"} />
          <Text text={"Administrator"} />
        </div>
        <button className="border border-solid px-[15px] py-[10px] bg-[#2563eb] text-white rounded-[10px] font-[400] hover:bg-[#3b82f6]">
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
