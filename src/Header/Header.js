// Dependencies imports
import React from "react";

// Local imports
import { ReactComponent as Schedule } from "../assets/icons/schedule_black_24dp.svg";
import { ReactComponent as Home } from "../assets/icons/home_black_24dp.svg";
import { ReactComponent as Person } from "../assets/icons/person_outline_black_24dp.svg";
// Style imports
import Head from "./Header.module.scss";

const Header = () => {
  return (
    <div className={Head.maintop}>
      <Schedule className={Head.icons} />
      <Home className={Head.icons} />
      <Person className={Head.icons} />
    </div>
  );
};

export default Header;
