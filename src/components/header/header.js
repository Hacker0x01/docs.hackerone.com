import React from "react";
import Navigation from "../navigation/navigation";
import MobileNavigation from "../navigation/mobile_navigation";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default Header;
