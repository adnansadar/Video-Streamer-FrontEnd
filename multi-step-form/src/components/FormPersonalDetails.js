import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    let { handleChange, values } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Enter Personal Details" />
          <TextField
            hintText="Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintText="City"
            floatingLabelText="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Bio"
            floatingLabelText="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={StyleSheetList.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="back"
            primary={false}
            style={StyleSheetList.button}
            onClick={this.back}
          />
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
