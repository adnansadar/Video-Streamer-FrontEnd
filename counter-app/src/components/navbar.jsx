/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

//Stateless Functional Component
//this cannot be used in this function, only in classes and props/any property is passed in
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-dark bg-dark">
//         <a className="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

//export default NavBar;
