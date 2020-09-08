import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";

class Sidebar extends Component {
  state = {};

  styles = {
    backgroundColor: "#333333",
    height: "100px",
  };

  render() {
    return (
      <div style={this.styles}>
        <div role="list" className="ui horizontal list">
          <div role="listitem" className="item">
            <a href="/">TOP</a>
          </div>
          <div role="listitem" className="item">
            <a href="/about">TRENDING</a>
          </div>
          <div role="listitem" className="item">
            <a href="/contact">FRESH</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
