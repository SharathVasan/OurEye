// Dependencies imports
import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Local imports
import { ReactComponent as MenuIcon } from "../assets/icons/menu_white_24dp.svg";
import { ReactComponent as Profile } from "../assets/icons/sidebar_person.svg";
import { ReactComponent as Features } from "../assets/icons/features.svg";
import { ReactComponent as Hygine } from "../assets/icons/hygine.svg";
import { ReactComponent as Quality } from "../assets/icons/quality.svg";
import { ReactComponent as Safety } from "../assets/icons/safety.svg";
import { ReactComponent as Video } from "../assets/icons/video.svg";
import { ReactComponent as Bell } from "../assets/icons/bell.svg";
import { ReactComponent as Support } from "../assets/icons/support.svg";
import Logo from "../assets/images/ourlogo.png";

// Style import
import Side from "./SideNav.module.scss";

const SideNav = () => {
  return (
    <ProSidebar
      // toggled={toggled}
      breakPoint="md"
      // onToggle={handleToggleSidebar}
      style={{ background: "#3a3a3a", width: "20vw", height: "100vh" }}
    >
      <SidebarHeader style={{ width: "20vw" }}>
        <div className={Side.sideheader}>
          <MenuIcon />
          <img src={Logo} alt="oureye" className={Side.logoimage} />
        </div>
      </SidebarHeader>
      <SidebarContent
        style={{
          display: "flex",
          width: "20vw",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingTop: 40,
        }}
      >
        <div>
          <Menu
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <MenuItem
              icon={<Profile />}
              style={{
                listStyle: "none",
                color: "#fff",
                fontSize: "12px",
                fontWeight: 500,
                textTransform: "uppercase",
              }}
            >
              Dashboard <Link to="/" />
            </MenuItem>
          </Menu>
          <Menu>
            <SubMenu
              // suffix={<span className="badge yellow">3</span>}
              title={
                <h4
                  style={{
                    color: "#fff",
                    fontSize: "12px",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  Features
                </h4>
              }
              icon={<Features />}
              style={{
                listStyle: "none",
                color: "#fff",
                fontSize: "12px",
                textTransform: "uppercase",
              }}
            >
              <SubMenu
                // suffix={<span className="badge yellow">3</span>}
                title={
                  <h4
                    style={{
                      color: "#fff",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      fontWeight: 500,
                    }}
                  >
                    Hygine
                  </h4>
                }
                icon={<Hygine />}
                innerSubMenuArrows={true}
                style={{
                  color: "#fff",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                <MenuItem
                  style={{ fontSize: "10px", color: "#fff", fontWeight: 500 }}
                >
                  Hygine Index <Link to="/hygine" />
                </MenuItem>
                <MenuItem
                  style={{ fontSize: "10px", color: "#fff", fontWeight: 500 }}
                >
                  Floor Mopping
                </MenuItem>
                <MenuItem
                  style={{ fontSize: "10px", color: "#fff", fontWeight: 500 }}
                >
                  20 sec Handwash Rule
                </MenuItem>
              </SubMenu>
              <SubMenu
                // suffix={<span className="badge yellow">3</span>}
                title={
                  <h4
                    style={{
                      color: "#fff",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      fontWeight: 500,
                    }}
                  >
                    Safety
                  </h4>
                }
                icon={<Safety />}
                innerSubMenuArrows={true}
                style={{
                  listStyle: "none",
                  color: "#fff",
                  fontSize: "12px",
                  textTransform: "uppercase",
                }}
              ></SubMenu>
              <SubMenu
                // suffix={<span className="badge yellow">3</span>}
                title={
                  <h4
                    style={{
                      color: "#fff",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      fontWeight: 500,
                    }}
                  >
                    Quality
                  </h4>
                }
                icon={<Quality />}
                innerSubMenuArrows={true}
                style={{
                  listStyle: "none",
                  color: "#fff",
                  fontSize: "12px",
                  textTransform: "uppercase",
                }}
              ></SubMenu>
            </SubMenu>
          </Menu>
          <Menu>
            <SubMenu
              // suffix={<span className="badge yellow">3</span>}
              title={
                <h4
                  style={{
                    color: "#fff",
                    fontSize: "12px",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  Live View
                </h4>
              }
              icon={<Video />}
              style={{
                listStyle: "none",
                color: "#fff",
                fontSize: "12px",
                textTransform: "uppercase",
              }}
            >
              {/* <SubMenu
              // suffix={<span className="badge yellow">3</span>}
              title={<h4>Hygine</h4>}
              icon={<Profile />}
              innerSubMenuArrows={true}
              style={{
                listStyle: "none",
                color: "#fff",
                fontSize: "12px",
                textTransform: "uppercase",
              }}
            >
              <MenuItem>Hygine Index</MenuItem>
              <MenuItem>Floor Mopping</MenuItem>
              <MenuItem>20 sec Handwash Rule</MenuItem>
            </SubMenu> */}
            </SubMenu>
          </Menu>
        </div>
        <div>
          <Menu
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <MenuItem
              icon={<Bell />}
              style={{
                listStyle: "none",
                color: "#fff",
                fontSize: "12px",
                fontWeight: 500,
                textTransform: "uppercase",
              }}
            >
              Outlet Notification <Link to="/" />
            </MenuItem>
          </Menu>

          <Menu
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <MenuItem
              icon={<Support />}
              style={{
                listStyle: "none",
                color: "#fff",
                fontSize: "12px",
                fontWeight: 500,
                textTransform: "uppercase",
              }}
            >
              Support
              <Link to="/" />
            </MenuItem>
          </Menu>
        </div>
      </SidebarContent>
      <SidebarFooter style={{ textAlign: "center", width: "20vw" }}>
        <div
          style={{
            padding: "20px 0px",
          }}
        ></div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SideNav;
