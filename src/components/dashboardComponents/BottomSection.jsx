import { FilePenLine, FileText, Upload, UserRound } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Text from "../../context/Text";

const BottomSection = () => {
  return (
    <section className="flex justify-between items-center gap-y-[20px] 2xl:px-[300px] px-[25px] pb-[30px] ">
      <Link
        to={"/"}
        className="flex items-center gap-[20px] p-[20px] bg-white rounded-[10px] w-fit shadow shadow-blue-950 hover:scale-105"
      >
        <div className="bg-[#dbeafe]  rounded-[10px] p-[15px]">
          <Upload color="#2563eb" fill="#2563eb" />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Upload</h2>
          <Text text={"New Research"} />
        </div>
      </Link>
      <Link
        to={"/"}
        className="flex items-center gap-[20px] p-[20px] bg-white rounded-[10px] w-fit shadow shadow-blue-950 hover:scale-105"
      >
        <span className="bg-[#dbeafe]  rounded-[10px] p-[15px]">
          <UserRound color="#2563eb" fill="#2563eb" />
        </span>
        <div>
          <h2 className="text-lg font-semibold mb-4">Add</h2>
          <Text text={"Partner Logo"} />
        </div>
      </Link>
      <Link
        to={"/"}
        className="flex items-center gap-[20px] p-[20px] bg-white rounded-[10px] w-fit shadow shadow-blue-950 hover:scale-105"
      >
        <span className="bg-[#dbeafe]  rounded-[10px] p-[15px]">
          <FileText color="white" fill="#2563eb" />
        </span>
        <div>
          <h2 className="text-lg font-semibold mb-4">Review</h2>
          <Text text={"Pending Applications"} />
        </div>
      </Link>
      <Link
        to={"/"}
        className="flex items-center gap-[20px] p-[20px] bg-white rounded-[10px] w-fit shadow shadow-blue-950 hover:scale-105"
      >
        <span className="bg-[#dbeafe]  rounded-[10px] p-[15px]">
          <FilePenLine color="white" fill="#2563eb" />
        </span>
        <div>
          <h2 className="text-lg font-semibold mb-4">Generate</h2>
          <Text text={"Report"} />
        </div>
      </Link>
    </section>
  );
};

export default BottomSection;
