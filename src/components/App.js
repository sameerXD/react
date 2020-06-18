import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

//pages
import Home from "../pages/Home";
import NotFoundPage from "../pages/404";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Products from "../pages/Products";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/Products" component={Products} />

        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}
