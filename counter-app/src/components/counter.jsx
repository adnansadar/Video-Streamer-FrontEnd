//JSX, Rendering Lists, Conditional Rendering, Handling Events, Updating the State.
import React, { Component } from "react";

class Counter extends Component {
  //Used to decide if we want to make an AJAX call or no
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
    }
  }

  componentWillUnmount() {
    console.log("Counter-Unmount");
  }

  //Counter is a React component
  //state is a property of React Component, its an object that includes any data the component needs
  // state is local and props is global, but it is used as read only
  //props used to initialize state of same or another component(cannot access ID though)
  // state = {
  //   // count: 0,
  //   // tags: [],

  //   value: this.props.counter.value, //props sets the value to whatever its been set from the code
  //   // components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // handleIncrement = () => {
  //   //setState needs to be used with React as is not aware of the change. React then schedules an asynchronous(not defined when exactly) call to render method
  //   this.setState({ value: this.state.value + 1 });
  //   // console.log("Increment clicked!", this);
  // };

  render() {
    //React.Fragment is a child of React, it can be used instead of div to remove multiple div
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* to pass an argument through the onClick()
        onClick={()=>this.handleIncrement(product)} */}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm "
        >
          Increment
        </button>
        {/* Counter raises the delete event and Counters handles it  */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        {/* {this.state.tags.length === 0 && "Please create a new tag!"} */}
        {/* checks the first condition, then moves to the 2nd which is a non empty string i.e. its true and then returns it.
        In terms of nos, any non zero no is taken as true. The last value in the AND condition will be returned */}
        {/* {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // classes += this.state.value === 0 ? "warning" : "primary";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // const { value } = this.state;
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
