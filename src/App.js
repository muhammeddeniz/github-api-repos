import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

import { HomePage, DetailPage } from "./pages";

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
      </Switch>
    </Router>
  );
};

export default App;
