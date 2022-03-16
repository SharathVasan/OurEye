//Dependencies imports
import React from "react";

// Local imports
import LineChart from "./LineChart";
import { ReactComponent as Expand } from "../../../assets/icons/expand.svg";
import { ReactComponent as Info } from "../../../assets/icons/infoblue.svg";

//Style imports
import Hy from "./Hygine.module.scss";

const Hygine = () => {
  return (
    <div className={Hy.mainholder}>
      <button className={Hy.todaybutton}>
        Today
        <Expand className={Hy.expandicon} />
      </button>
      <div className={Hy.maingraphholder}>
        <div className={Hy.topbar}>
          <h3 className={Hy.mainheading}>Hygine Index</h3>
          <Info className={Hy.icon} />
        </div>
        <h4 className={Hy.subhead}>
          Data for oct 25'2021 from 12:00:00 AM to 11:58:21 AM
        </h4>
        <div className={Hy.innercontainer}>
          <h4 className={Hy.mainheading}>PPE CHECK</h4>
          <h5 className={Hy.bluetext}>Hygine Deviation Trend</h5>
          <h6 className={Hy.greytext}>
            The hygine Index Value at 06:05 is 1.81
          </h6>
          <div className={Hy.graphholder}>
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hygine;
