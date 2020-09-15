import React from "react";
import logo from "./logo_resize_500.png";
import classes from "./mydayheader.module.css";
import QuoteFetcher from "../Quotes/QuoteFetcher";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyDayHeader = () => {
  return (
    <div>
      <Row>
        <Col xs={5} className={classes.centerLogo}>
          <img width={250} height={250} alt="myDay_logo" src={logo} />
        </Col>
        <Col className={classes.quoteEl}>
          <QuoteFetcher />
        </Col>
      </Row>
    </div>
  );
};

export default MyDayHeader;
