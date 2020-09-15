import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.module.css";

import classes from "./footer.module.css";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <div>
      <Navbar sticky="footer" className={classes.navbar}>
        I immensely enjoyed this bootcamp with all of you! <br />
        Cheers, your fellow GitHub-er @TracyVy
      </Navbar>
    </div>
  );
};

export default Footer;
