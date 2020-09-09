import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bottom.module.css";

import classes from "./bottom.module.css";
import Navbar from "react-bootstrap/Navbar";

const Bottom = () => {
  return (
    <div>
      <Navbar sticky="bottom" className={classes.navbar}>
        I immensely enjoyed this bootcamp with all of you! <br />
        Cheers, your fellow GitHub-er @TracyVy
      </Navbar>
    </div>
  );
};

export default Bottom;
