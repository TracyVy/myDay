import React from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MyDayHeader from "./components/MyDayHeader/MyDayHeader";
import Postit from "./components/Postit/Postit";
import Calendar from "./components/Calendar/Calendar";
import Forecast from "./components/Weather/Forecast";
import YouTube from "./components/YouTube/YouTube";
import Bottom from "./components/Bottom/Bottom";

class App extends React.Component {
  render() {
    return (
      <div>
        <MyDayHeader />

        <Calendar />

        <Container>
          <Row>
            <Col>
              <Forecast />
            </Col>
            <Col>
              <Postit />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <YouTube />
            </Col>
            <Col></Col>
          </Row>
        </Container>

        <Bottom />
      </div>
    );
  }
}

export default App;
