import React, { Component } from "react";
import BookList from "./BookList";

class Wall extends Component {
  state = {};

  styles = {
    backgroundColor: "#999999",
    minHeight: "100px",
  };

  render() {
    return (
      <div style={this.styles}>
        <BookList />
      </div>
    );
  }
}

export default Wall;
