import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts";
import Error from "./pages/Error";
import Navigation from "./components/Navigation";
import Portfolio from "./pages/Portfolio";
import Details from "./components/Details";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./pages/Footer";

function App() {
  return (
    <div  >
      <BrowserRouter>     
      <ScrollToTop />
      <Navigation />
         <Switch>
          {/* <Route path="/" exact >
            <Home />
          </Route> */}
          <Route path="/" exact component={Home}></Route>
          <Route path="/about"  component={Details}></Route>
          <Route path="/projects"  component={Portfolio}></Route>
          <Route path="/contact"  component={Contacts}></Route>
          <Route path="*"  component={Error}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
     </div>
  );
}

export default App;
