import React from "react";
import SideBar from "../components/dashboardComponents/SideBar";
import Navbar from "../components/dashboardComponents/Navbar";
import Widgets from "../components/dashboardComponents/Widgets";
import MiddleSection from "./../components/dashboardComponents/MiddleSection";
import BottomSection from "./../components/dashboardComponents/BottomSection";

const DashboardPage = () => {
  return (
    <main className="mx-[300px] ">
      <Navbar />
      <section className="flex items-start ">
        <SideBar />
        <div className="bg-[#f3f4f6] px-[30px] py-[30px] h-screen w-full">
          <Widgets />
          <MiddleSection />
          <BottomSection />
        </div>
      </section>
    </main>
  );
};

export default DashboardPage;
