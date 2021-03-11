/* eslint-disable no-const-assign */
import React, { Component } from "react";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };

  //Go to next step
  nextStep = () => {
    let { step } = this.state;
    this.setState({ step: step + 1 });
  };

  //Go to prev step
  prevStep = () => {
    let { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // Handle Fields Change
  // input over here are the specific values of the state which are to be set the event's value entered by the user
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const {
      step,
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio,
    } = this.state;
    const values = { step, firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        break;
    }
  }
}

export default UserForm;
