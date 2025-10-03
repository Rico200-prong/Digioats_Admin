import { FileTerminal, FileText, FileUp } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Text from "./../../context/Text";

const Widgets = () => {
  return (
    <section className="flex justify-between items-center gap-y-[20px] 2xl:px-[300px] px-[25px]  ">
      <Link
        to={"/"}
        className="flex items-center gap-[20px] p-[20px] bg-white rounded-[10px] w-fit shadow shadow-blue-950 hover:scale-105"
      >
        <span className="bg-[#dbeafe]  rounded-[10px] p-[15px]">
          <FileText color="white" fill="#2563eb" />
        </span>
        <Text text={"Applications Submitted"} />
      </Link>
      <Link
        to={"/"}
        className="flex items-center gap-[20px] p-[20px] bg-white rounded-[10px] w-fit shadow shadow-blue-950 hover:scale-105"
      >
        <span className="bg-[#dbeafe]  rounded-[10px] p-[15px]">
          <FileUp color="white" fill="#2563eb" />
        </span>
        <Text text={"Reports Uploaded"} />
      </Link>
      <Link
        to={"/"}
        className="flex items-center gap-[20px] p-[20px] bg-white rounded-[10px] w-fit shadow shadow-blue-950 hover:scale-105"
      >
        <span className="bg-[#dbeafe]  rounded-[10px] p-[15px]">
          <FileTerminal color="white" fill="#2563eb" />
        </span>
        <Text text={"Donations Raised"} />
      </Link>
      <Link
        to={"/"}
        className="flex items-center gap-[20px] p-[20px] bg-white rounded-[10px] w-fit shadow shadow-blue-950 hover:scale-105"
      >
        <span className="bg-[#dbeafe]  rounded-[10px] p-[15px]">
          <FileText color="white" fill="#2563eb" />
        </span>
        <Text text={"OTC Inquiries"} />
      </Link>
    </section>
  );
};

export default Widgets;
