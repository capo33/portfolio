import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Error from "./pages/Error";
import Navigation from "./components/Navigation";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <BrowserRouter>     
      <Navigation />
        <Switch>
          <Route path="/" exact component={Home}></Route>

          <Route path="/about"  component={About}></Route>
          <Route path="/projects"  component={Portfolio}></Route>
          <Route path="/contact"  component={Contacts}></Route>
          <Route path="*"  component={Error}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
