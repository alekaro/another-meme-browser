import React, { Component } from "react";

class Wall extends Component {
  state = {};

  styles = {
    backgroundColor: "#999999",
    height: "100px",
  };

  render() {
    return <div style={this.styles}></div>;
  }
}

export default Wall;
