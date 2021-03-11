import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  //state of counters is accessed by its childer through props
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App-Constructor");
  }
  //Life Cycle Hooks
  componentDidMount() {
    console.log("App-Mounted");
  } //App is in the DOM after mounting

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; //cloning counters array using ...
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; //cloning the current value in the counter
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    // console.log("Event Handler Called!", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId); //filter out item to be deleted
    this.setState({ counters });
    //setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.
  };

  render() {
    console.log("App-Rendered");

    return (
      //React.Fragment is used when returning multiple root elements
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length} //shows total value
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
