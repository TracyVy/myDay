import React, { Component } from "react";
import GoogleLogin from "react-google-login";

class GoogleOAuth extends Component {
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  render() {
    return (
      <div className="GoogleOAuth">
        <GoogleLogin
          clientId="522668337222-7ec4busvjmku0dbnpe3s6l951b0mtdd2.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          // cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}

export default GoogleOAuth;
