import React, { Component } from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Footer from "./footer";
import Wall from "./wall";

class MainContainer extends Component {
  state = {};

  styles = {
    backgroundColor: "#000000",
    height: "100vh",
    fontWeight: "bold",
  };

  render() {
    return (
      <div style={this.styles}>
        <Topbar></Topbar>
        <div style={{ height: "100px" }}>
          <span
            style={{ height: "100px" }}
            className="float-left col-3 m-0 p-0"
          ></span>
          <span className="float-left col-6 p-0">
            <Wall></Wall>
          </span>
          <span className="float-right col-3 pr-0">
            <Sidebar></Sidebar>
          </span>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default MainContainer;
