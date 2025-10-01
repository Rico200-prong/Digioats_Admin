import {
  ArrowRightLeft,
  CircleQuestionMark,
  Handshake,
  House,
  Paperclip,
  Settings,
  User,
  Waypoints,
} from "lucide-react";
import React from "react";
import Subheading from "../../context/Subheading";
import Text from "./../../context/Text";

const SideBar = () => {
  return (
    <aside className=" w-[40%]">
      <div className="flex items-center gap-x-[20px] px-[30px] py-[15px] bg-[#2563eb] text-white  ">
        <House />
        <Subheading subHeading={"Dashboard"} />
      </div>
      <div className="flex items-center gap-x-[20px] px-[30px] py-[15px]   ">
        <Paperclip />
        <Subheading subHeading={"Content Management"} />
      </div>
      <div className="mx-[75px] flex flex-col gap-y-[15px]">
        <Text text={"Research Uploads"} />
        <Text text={"Blog & Insights"} />
        <Text text={"Media Library"} />
        <Text text={"Events Manager"} />
      </div>
      <div className="flex items-center gap-x-[20px] px-[30px] py-[15px]  ">
        <User />
        <Subheading subHeading={"Applications & User"} />
      </div>
      <div className="mx-[75px] flex flex-col gap-y-[15px]">
        <Text text={"Career Applications"} />
        <Text text={"User Management"} />
      </div>
      <div className="flex items-center gap-x-[20px] px-[30px] py-[15px]  ">
        <ArrowRightLeft />
        <Subheading subHeading={"Transactions & Compliance"} />
      </div>
      <div className="mx-[75px] flex flex-col gap-y-[15px]">
        <Text text={"OTC Inquiries"} />
        <Text text={"Donations"} />
      </div>
      <div className="flex items-center gap-x-[20px] px-[30px] py-[15px]  ">
        <Handshake />
        <Subheading subHeading={"Partners & Investors"} />
      </div>
      <div className="mx-[75px] flex flex-col gap-y-[15px]">
        <Text text={"System Settings"} />
        <Text text={"Help & Documentation"} />
      </div>
      <div className="flex items-center gap-x-[20px] px-[30px] py-[15px]  ">
        <Waypoints />
        <Subheading subHeading={"Analytics & Reports"} />
      </div>
      <div className="flex items-center gap-x-[20px] px-[30px] py-[15px]  ">
        <Settings />
        <Subheading subHeading={"System Settings"} />
      </div>
      <div className="flex items-center gap-x-[20px] px-[30px] py-[15px]  ">
        <CircleQuestionMark />
        <Subheading subHeading={"Help & Documentation"} />
      </div>
    </aside>
  );
};

export default SideBar;
