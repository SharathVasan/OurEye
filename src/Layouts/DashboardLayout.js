import React from "react";
import SideNav from "../SideNav/SideNav";
import Header from "../Header/Header";
import Dashboard from "../Components/Pages/Dashboard/Dashboard";

const DashboardLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-top",
        justifyContent: "space-between",
        gap: "0px",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <SideNav />
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "0px",
        }}
      >
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardLayout;
