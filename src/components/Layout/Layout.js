import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import helplineLogo from "../../assets/helpline.png";
import { Home, UserRound } from "lucide-react";

const Layout = ({ children }) => {
  const [selectedTab, setSelectedTab] = React.useState("home");
  return (
    <div className="layout">
      <div className="helpline">
        <img src={helplineLogo} alt="" />
      </div>
      <div className="logo">
        <p>4</p>
        <img src={logo} alt="" />
      </div>
      <div className="children" >{children}</div>

      <div className="bottomNav">
        <div
          className={"tab" + (selectedTab === "home" ? " selected" : "")}
          onClick={() => setSelectedTab("home")}
        >
          <Home />
        </div>
        <div
          className={"tab" + (selectedTab === "employee" ? " selected" : "")}
          onClick={() => setSelectedTab("employee")}
        >
          <UserRound />
        </div>
      </div>
    </div>
  );
};

export default Layout;
