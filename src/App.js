import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Error from "./pages/Error";
import Navigation from "./components/Navigation";
import Portfolio from "./pages/Portfolio";
import Details from "./components/Details";

function App() {
  return (
    <div >
      <BrowserRouter>     
      <Navigation />
         <Switch>
          <Route path="/" exact >
            <Home />
          </Route>
          <Route path="/about"  component={Details}></Route>
          <Route path="/projects"  component={Portfolio}></Route>
          <Route path="/contact"  component={Contacts}></Route>
          <Route path="*"  component={Error}></Route>
        </Switch>
      </BrowserRouter>
     </div>
  );
}

export default App;
