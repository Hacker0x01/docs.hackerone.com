import React from "react";
import Navigation from "../navigation/navigation";

import "./footer.scss";

const Footer = () => (
  <div className="footer">
    <div className="footer__inner">
      We're always happy to help. Feel free to{" "}
      <a href="https://support.hackerone.com">
        contact support
      </a>
      ,{" "}
      <a href="https://www.hackerone.com/contact">
        connect with our sales team
      </a>
      , or{" "}
      <a href="https://www.hackerone.com" target="_blank">
        check out our website
      </a>
      .
    </div>
  </div>
);

export default Footer;
