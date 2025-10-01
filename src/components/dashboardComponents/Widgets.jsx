import { FileTerminal, FileText, FileUp } from "lucide-react";
import React from "react";
import Text from "./../../context/Text";

const Widgets = () => {
  return (
    <section className="grid grid-cols-2 items-center gap-y-[20px]">
      <div className="flex items-center gap-[20px] p-[20px] bg-white rounded-[10px] w-[300px] ">
        <span className="bg-[#dbeafe]  rounded-[10px] p-[15px]">
          <FileText color="white" fill="#2563eb" />
        </span>
        <Text text={"Applications Submitted"} />
      </div>
      <div className="flex items-center gap-[20px] p-[20px] bg-white rounded-[10px] w-[300px]">
        <span className="bg-[#dbeafe]  rounded-[10px] p-[15px]">
          <FileUp color="white" fill="#2563eb" />
        </span>
        <Text text={"Reports Uploaded"} />
      </div>
      <div className="flex items-center gap-[20px] p-[20px] bg-white rounded-[10px] w-[300px]">
        <span className="bg-[#dbeafe]  rounded-[10px] p-[15px]">
          <FileTerminal color="white" fill="#2563eb" />
        </span>
        <Text text={"Donations Raised"} />
      </div>
      <div className="flex items-center gap-[20px] p-[20px] bg-white rounded-[10px] w-[300px]">
        <span className="bg-[#dbeafe]  rounded-[10px] p-[15px]">
          <FileText color="white" fill="#2563eb" />
        </span>
        <Text text={"OTC Inquiries"} />
      </div>
    </section>
  );
};

export default Widgets;
