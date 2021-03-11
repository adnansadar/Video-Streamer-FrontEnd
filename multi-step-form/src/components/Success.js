import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Success" />
          <h1>Thank You For Your Submission!</h1>
          <p>We will get in touch with you.</p>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
