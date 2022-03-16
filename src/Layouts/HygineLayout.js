import React from "react";
import SideNav from "../SideNav/SideNav";
import Header from "../Header/Header";
import Hygine from "../Components/Pages/Hygine/Hygine";

const HygineLayout = () => {
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
        <Hygine />
      </div>
    </div>
  );
};

export default HygineLayout;
