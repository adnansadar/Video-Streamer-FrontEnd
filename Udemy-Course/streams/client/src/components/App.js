import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={StreamList}></Route>
            <Route exact path="/streams/new" component={StreamCreate}></Route>
            <Route exact path="/streams/edit" component={StreamEdit}></Route>
            <Route
              exact
              path="/streams/delete"
              component={StreamDelete}
            ></Route>
            <Route exact path="/streams/show" component={StreamShow}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
