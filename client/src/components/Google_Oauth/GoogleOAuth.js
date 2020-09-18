import React, { useState } from "react";
import classes from "./google.module.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GoogleButton from "react-google-button";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById("content");
  var textContent = document.createTextNode(message + "\n");
  pre.appendChild(textContent);
}

const GoogleOAuth = ({ onAuthentication }) => {
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState("");
  React.useEffect(() => {
    console.log("XXXX - useEffect");
    window.gapi.load("client:auth2", initClient);
  }, [window.gapi]);

  function listUpcomingEvents() {
    window.gapi.client.calendar.calendars
      .get({
        calendarId: "primary",
      })
      .then((e) => {
        setEmail(e.result.id);
        onAuthentication(e.result.id);
      });
  }

  function initClient() {
    window.gapi.client
      .init({
        apiKey: process.env.GOOGLE_apiKey,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })
      .then(
        function () {
          console.log("XX - Client is connected");
          // Listen for sign-in state changes.
          console.log(window.gapi.auth2);
          const authInstance = window.gapi.auth2.getAuthInstance();
          console.log("XXX - authInstance: ", authInstance);
          authInstance.isSignedIn.listen((e) => {
            setSignIn(e);
            // shortcircuiting if Statement
            // console.log("My email address is ", e.result.id);
            e && listUpcomingEvents();
          });
        },
        function (error) {
          appendPre(JSON.stringify(error, null, 2));
        }
      );
  }

  // Sign in the user upon button click.
  function handleAuthClick(event) {
    window.gapi.auth2.getAuthInstance().signIn();
  }

  // Sign out the user upon button click.
  function handleSignoutClick(event) {
    window.gapi.auth2.getAuthInstance().signOut();
    setEmail("");
  }

  return (
    <div>
      <Row>
        <Col>
          <GoogleButton onClick={handleAuthClick} id="authorize_button" />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <button
            onClick={handleSignoutClick}
            id="signout_button"
            className={classes.signOutBtn}
          >
            Reset
          </button>
        </Col>
      </Row>

      {email && (
        <iframe
          src={`https://calendar.google.com/calendar/embed?src=${email}&ctz=America%2FLos_Angeles`}
          style={{ border: "0" }}
          frameborder="0"
          scrolling="no"
        ></iframe>
      )}
    </div>
  );
};

export default GoogleOAuth;
