import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

import { HomePage } from "./pages";
function BlogPost() {
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/blog/:slug">
          <BlogPost />
        </Route>
      </Switch>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}
