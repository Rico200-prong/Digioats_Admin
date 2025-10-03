import React from "react";
import SideBar from "../components/dashboardComponents/SideBar";
import Navbar from "../components/dashboardComponents/Navbar";
import Widgets from "../components/dashboardComponents/Widgets";
import MiddleSection from "./../components/dashboardComponents/MiddleSection";
import BottomSection from "./../components/dashboardComponents/BottomSection";

const DashboardPage = () => {
  return (
    <main className="bg-[#dfdfe4]">
      <Navbar />
      <SideBar />
      <Widgets />
      <MiddleSection />
      <BottomSection />
    </main>
  );
};

export default DashboardPage;
