import React from "react";
import classes from "./postit.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "devextreme/dist/css/dx.common.css";
import "../themes/generated/theme.base.css";
import "../themes/generated/theme.additional.css";
import "..../dx-styles.scss";
import "";

import HtmlEditor, {
  Toolbar,
  MediaResizing,
  Item,
} from "devextreme-react/html-editor";

class Postit extends React.Component {
  constructor() {
    super();

    this.sizeValues = ["8pt", "10pt", "12pt", "14pt"];
    this.fontValues = [
      "Arial",
      "Courier New",
      "Lucida Console",
      "Tahoma",
      "Times New Roman",
      "Verdana",
    ];
    // this.headerValues = [false, 1, 2, 3, 4, 5];
    this.enabled = {
      enabled: true,
    };
  }
  render() {
    return (
      <div className={classes.postitApp}>
        <React.Fragment>
          <div className="widget-container">
            <h5>Post-It</h5>
            <HtmlEditor height="380px">
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
                <Item formatName="image" />
                <Item formatName="separator" />
              </Toolbar>
            </HtmlEditor>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default Postit;
