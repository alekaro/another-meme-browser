import React, { Component } from "react";
import Topbar from "./components/Topbar";
import Home from "./components/Home";
import Register from "./components/Register";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  styles = {
    backgroundColor: "#000000",
    height: "100vh",
    fontWeight: "bold",
  };

  render() {
    return (
      <BrowserRouter>
        <div style={this.styles}>
          <Topbar />
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
