import React, { Component } from "react";
import GoogleLogin from "react-google-login";

const CLIENT_ID =
  "522668337222-7ec4busvjmku0dbnpe3s6l951b0mtdd2.apps.googleusercontent.com";

class GoogleOAuth extends Component {
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
    const imageURL = response.profileObj.imageUrl;
    console.log(imageURL);
    const accessToken = response.accessToken;
    console.log(accessToken);
    const tokenObj = response.tokenObj;
    console.log(tokenObj);
  };

  render() {
    return (
      <div className="GoogleOAuth">
        <GoogleLogin
          clientId={CLIENT_ID}
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
