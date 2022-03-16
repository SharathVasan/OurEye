//Dependencies imports
import React from "react";

// Local imports
import LineChart from "./LineChart";
import { ReactComponent as Bell } from "../../../assets/icons/bellblue.svg";
import { ReactComponent as Info } from "../../../assets/icons/infoblue.svg";
import { ReactComponent as Expand } from "../../../assets/icons/expand.svg";

// Style imports
import Dash from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={Dash.mainholder}>
      <div className={Dash.graphholder}>
        <LineChart />
        <button className={Dash.todaybutton}>
          Today
          <Expand className={Dash.expandicon} />
        </button>
      </div>
      <div className={Dash.index}>
        <div className={Dash.leftindex}>
          <h3 className={Dash.hyginehead}>Hygine Index</h3>
          <h5 className={Dash.subline}>Data displayed in the graph</h5>
        </div>
        <div className={Dash.middleindex}>
          <h4 className={Dash.topheading}>SOP Detection</h4>
          <div className={Dash.threepartition}>
            <div className={Dash.indi}>
              <h6 className={Dash.smallhead}>Hairnets</h6>
              <h4 className={Dash.counts}>105</h4>
            </div>
            <div className={Dash.indi}>
              <h6 className={Dash.smallhead}>Masks</h6>
              <h4 className={Dash.counts}>157</h4>
            </div>
            <div className={Dash.indi}>
              <h6 className={Dash.smallhead}>Gloves</h6>
              <h4 className={Dash.counts}>785</h4>
            </div>
          </div>
        </div>
        <div className={Dash.rightindex}>
          <h4 className={Dash.topheading}>Deviation Detection</h4>
          <div className={Dash.threepartition}>
            <div className={Dash.indi}>
              <h6 className={Dash.smallhead}>Hairnets</h6>
              <h4 className={Dash.counts}>105</h4>
            </div>
            <div className={Dash.indi}>
              <h6 className={Dash.smallhead}>Masks</h6>
              <h4 className={Dash.counts}>157</h4>
            </div>
            <div className={Dash.indi}>
              <h6 className={Dash.smallhead}>Gloves</h6>
              <h4 className={Dash.counts}>785</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={Dash.bottomholder}>
        <div className={Dash.card}>
          <div className={Dash.bellhead}>
            <h3 className={Dash.cardheading}>Hygine</h3>
            <Bell className={Dash.icon} />
          </div>
          <div className={Dash.infobars}>
            <h4 className={Dash.infohead}>Hygine index</h4>
            <Info className={Dash.icon} />
          </div>
          <hr />
          <div className={Dash.infobars}>
            <h4 className={Dash.infohead}>PPE Deviations</h4>
            <Info className={Dash.icon} />
          </div>
          <hr />
          <div className={Dash.infobars}>
            <h4 className={Dash.infohead}>floor mopping</h4>
            <Info className={Dash.icon} />
          </div>
          <hr />
          <div className={Dash.infobars}>
            <h4 className={Dash.infohead}>20 second handwash rule</h4>
            <Info className={Dash.icon} />
          </div>
          <hr />
        </div>
        <div className={Dash.card}>
          <div className={Dash.bellhead}>
            <h3 className={Dash.cardheading}>Safety</h3>
            <Bell className={Dash.icon} />
          </div>
          <div className={Dash.infobars}>
            <h4 className={Dash.infohead}>Socail Distancing violations</h4>
            <Info className={Dash.icon} />
          </div>
          <hr />
          <div className={Dash.infobars}>
            <h4 className={Dash.infohead}>CCTV Tempering</h4>
            <Info className={Dash.icon} />
          </div>
          <hr />
        </div>
        <div className={Dash.card}>
          <div className={Dash.bellhead}>
            <h3 className={Dash.cardheading}>Quality</h3>
            <Bell className={Dash.icon} />
          </div>
          <div className={Dash.infobars}>
            <h4 className={Dash.infohead}>Frequent age group visitors</h4>
            <Info className={Dash.icon} />
          </div>
          <hr />
          <div className={Dash.infobars}>
            <h4 className={Dash.infohead}>customer emotions</h4>
            <Info className={Dash.icon} />
          </div>
          <hr />
          <div className={Dash.infobars}>
            <h4 className={Dash.infohead}>customer unattended</h4>
            <Info className={Dash.icon} />
          </div>
          <hr />
          <div className={Dash.infobars}>
            <h4 className={Dash.infohead}>Average time spent</h4>
            <Info className={Dash.icon} />
          </div>
          <hr />
          <div className={Dash.infobars}>
            <h4 className={Dash.infohead}>kitchen order ticket</h4>
            <Info className={Dash.icon} />
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
