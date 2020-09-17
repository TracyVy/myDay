import React from "react";
import classes from "./Postit.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Button from "react-bootstrap/Button";

import "devextreme/dist/css/dx.common.css";
import "../../themes/generated/theme.base.css";
import "../../themes/generated/theme.additional.css";
import "../../dx-styles.scss";

import HtmlEditor, {
  Toolbar,
  MediaResizing,
  Item,
} from "devextreme-react/html-editor";

class Postit extends React.Component {
  state = {
    email: "",
    postitText: "",
  };

  endpoint = "http://localhost:5000"; //process.env.SERVER_ENDPOINT;

  constructor() {
    super();
    this.state = {
      postitText: "",
    };
    this.sizeValues = ["8pt", "10pt", "12pt", "14pt"];
    this.fontValues = [
      "Arial",
      "Courier New",
      "Lucida Console",
      "Tahoma",
      "Times New Roman",
      "Verdana",
    ];

    this.enabled = {
      enabled: true,
    };

    this.valueChanged = this.valueChanged.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  async handleSave() {
    const response = await axios.post(this.endpoint + "/postit", {
      email: this.state.email,
      text: this.state.postitText,
    });
  }

  valueChanged(e) {
    this.setState({
      postitText: e.value,
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps.email, this.props.email);

    if (this.state.email != this.props.email) {
      this.state.email = this.props.email;
      const response = await axios.get(this.endpoint + "/postit", {
        params: { email: this.state.email },
      });
      this.setState({ postitText: response.data.text });
    }
  }

  render() {
    return (
      <div className={classes.postitApp}>
        <React.Fragment>
          <div className="widget-container">
            <h5>Post-It</h5>
            <HtmlEditor
              height="380px"
              value={this.state.postitText}
              onValueChanged={this.valueChanged}
            >
              <MediaResizing enabled={true} />
              <Toolbar>
                <Item formatName="separator" />
                <Item formatName="size" formatValues={this.sizeValues} />
                <Item formatName="font" formatValues={this.fontValues} />
                <Item formatName="separator" />
                <Item formatName="bold" />
                <Item formatName="italic" />
                <Item formatName="strike" />
                <Item formatName="underline" />
                <Item formatName="separator" />
                <Item formatName="alignLeft" />
                <Item formatName="alignCenter" />
                <Item formatName="alignRight" />
                <Item formatName="alignJustify" />
                <Item formatName="separator" />
                <Item formatName="orderedList" />
                <Item formatName="bulletList" />
                <Item formatName="separator" />
                <Item formatName="color" />
                <Item formatName="background" />
                <Item formatName="separator" />
                <Item formatName="link" />
                <Item formatName="separator" />
              </Toolbar>
            </HtmlEditor>
            <Button
              variant="outline-info"
              onClick={this.handleSave}
              style={{ margin: "5px" }}
            >
              SAVE
            </Button>{" "}
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default Postit;
