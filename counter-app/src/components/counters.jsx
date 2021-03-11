import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //   //state of counters is accessed by its parent counter through props
  //   state = {
  //     counters: [
  //       { id: 1, value: 5 },
  //       { id: 2, value: 0 },
  //       { id: 3, value: 0 },
  //       { id: 4, value: 0 },
  //     ],
  //   };

  //   handleIncrement = (counter) => {
  //     const counters = [...this.state.counters]; //cloning counters array using ...
  //     const index = counters.indexOf(counter);
  //     counters[index] = { ...counter }; //cloning the current value in the counter
  //     counters[index].value++;
  //     this.setState({ counters });
  //   };

  //   handleReset = () => {
  //     const counters = this.state.counters.map((c) => {
  //       c.value = 0;
  //       return c;
  //     });
  //     this.setState({ counters });
  //   };

  //   handleDelete = (counterId) => {
  //     // console.log("Event Handler Called!", counterId);
  //     const counters = this.state.counters.filter((c) => c.id !== counterId); //filter out item to be deleted
  //     this.setState({ counters });
  //     //setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.
  //   };

  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {/* props  */}
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            //state has been converted to props as we are passing this upwards(to the parent) App component
            // value={counter.value}
            // selected
            // id={counter.id}//pass id as a prop as key cannot be accessed by it
            counter={counter} //encapsulation, counter object is carrying all the data of counter
          >
            <h4>Title</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
