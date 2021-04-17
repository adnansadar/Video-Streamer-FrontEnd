import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import history from "../history";
// Each router creates a history object that it uses to keep track of the current location and re-renders the application whenever this location changes. For this reason, the other React Router components rely on this history object being present; which is why they need to be rendered inside a router.
// The BrowserRouter uses the HTML5 history API to keep the user interface in sync with the URL in the browser address bar.
export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
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
                path="/streams/delete/:id"
                component={StreamDelete}
              ></Route>
              <Route exact path="/streams/:id" component={StreamShow}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
