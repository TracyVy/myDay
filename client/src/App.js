import React, { useState } from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MyDayHeader from "./components/MyDayHeader/MyDayHeader";
import GoogleOAuth from "./components/Google_Oauth/GoogleOAuth";
import Forecast from "./components/Weather/Forecast";
import Postit from "./components/Postit/Postit";
import YouTube from "./components/YouTube/YouTube";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  //const [email, setEmail] = useState("example@gmail.com");

  render() {
    return (
      <div>
        <MyDayHeader />
        <GoogleOAuth />

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
