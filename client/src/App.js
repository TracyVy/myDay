import React from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MyDayHeader from "./components/MyDayHeader/MyDayHeader";
import GoogleOAuth from "./components/Google_Oauth/GoogleOAuth";
import Calendar from "./components/Calendar/Calendar";
import Forecast from "./components/Weather/Forecast";
import Postit from "./components/Postit/Postit";
import YouTube from "./components/YouTube/YouTube";
import Footer from "./components/FooterB/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <MyDayHeader />
        <GoogleOAuth />
        <Calendar />

        <Row>
          <Col>
            <Forecast />
          </Col>
          <Col>
            <Postit />
          </Col>
        </Row>

        <Row>
          <Col>
            <YouTube />
          </Col>
        </Row>

        <Footer />
      </div>
    );
  }
}

export default App;
