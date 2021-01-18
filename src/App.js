import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

import { HomePage, DetailPage, UserDetail } from "./pages";

import "./normalize.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/home"]}>
          <HomePage />
        </Route>
        <Route path="/orgs/:id">
          <DetailPage />
        </Route>

        <Route path="/users/:id">
          <UserDetail />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
