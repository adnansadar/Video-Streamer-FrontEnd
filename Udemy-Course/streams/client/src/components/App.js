import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import history from "../history";
export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Route exact path="/" component={StreamList}></Route>
            <Route exact path="/streams/new" component={StreamCreate}></Route>
            <Route
              exact
              path="/streams/edit/:id"
              // : is used to store id as params inside ReactRouterDOM's props passed to StreamEdit
              component={StreamEdit}
            ></Route>
            <Route
              exact
              path="/streams/delete"
              component={StreamDelete}
            ></Route>
            <Route exact path="/streams/show" component={StreamShow}></Route>
          </div>
        </Router>
      </div>
    );
  }
}
