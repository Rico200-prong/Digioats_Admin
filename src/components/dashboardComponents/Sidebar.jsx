import {
  ArrowRightLeft,
  CircleQuestionMark,
  Handshake,
  House,
  Menu,
  Paperclip,
  Settings,
  User,
  Waypoints,
} from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Subheading from "../../context/Subheading";
import Text from "./../../context/Text";

const SideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className="2xl:mx-[300px] mx-[25px]  mt-[15px] mb-[15px]  ">
        <button className={` ${isMenuOpen ? "" : ""}`} onClick={toggleMenu}>
          <Menu />
        </button>
        {isMenuOpen && (
          <div
            className={`shadow shadow-blue-950 border border-solid w-max rounded-[10px] absolute z-50  bg-white ${
              isMenuOpen ? "" : ""
            }`}
          >
            <div className="flex items-center gap-x-[20px] px-[30px] py-[15px] bg-[#2563eb] text-white rounded-t-[10px]  ">
              <House />
              <Subheading subHeading={"Dashboard"} />
            </div>
            <div className="flex items-center gap-x-[20px] px-[30px] py-[15px]    hover:bg-[#d5deeb]">
              <Paperclip />
              <Link to={"/"} className="font-[500] text-[18px]">
                Content Management
              </Link>
            </div>
            <div className="mx-[75px] flex flex-col gap-y-[15px]">
              <Text text={"Research Uploads"} />
              <Text text={"Blog & Insights"} />
              <Text text={"Media Library"} />
              <Text text={"Events Manager"} />
            </div>
            <div className="flex items-center gap-x-[20px] px-[30px] py-[15px]  hover:bg-[#d5deeb]">
              <User />
              <Link to={"/"} className="font-[500] text-[18px]">
                Applications & User
              </Link>
            </div>
            <div className="px-[75px] flex flex-col gap-y-[15px]">
              <Text text={"Career Applications"} />
              <Text text={"User Management"} />
            </div>
            <div className="flex items-center gap-x-[20px] px-[30px] py-[15px]  hover:bg-[#d5deeb]">
              <ArrowRightLeft />
              <Link to={"/"} className="font-[500] text-[18px]">
                Transactions & Compliance
              </Link>
            </div>
            <div className="mx-[75px] flex flex-col gap-y-[15px]">
              <Text text={"OTC Inquiries"} />
              <Text text={"Donations"} />
            </div>
            <div className="flex items-center gap-x-[20px] px-[30px] py-[15px]  hover:bg-[#d5deeb]">
              <Handshake />
              <Link to={"/"} className="font-[500] text-[18px]">
                Partners & Investors
              </Link>
            </div>
            <div className="mx-[75px] flex flex-col gap-y-[15px]">
              <Text text={"System Settings"} />
              <Text text={"Help & Documentation"} />
            </div>
            <div className="flex items-center gap-x-[20px] px-[30px] py-[15px]  hover:bg-[#d5deeb]">
              <Waypoints />
              <Link to={"/"} className="font-[500] text-[18px]">
                Analytics & Reports
              </Link>
            </div>
            <div className="flex items-center gap-x-[20px] px-[30px] py-[15px]  hover:bg-[#d5deeb]">
              <Settings />
              <Link to={"/"} className="font-[500] text-[18px]">
                Sysstem Settings
              </Link>
            </div>
            <div className="flex items-center gap-x-[20px] px-[30px] py-[15px]  hover:bg-[#d5deeb]">
              <CircleQuestionMark />
              <Subheading subHeading={"Help & Documentation"} />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SideBar;
