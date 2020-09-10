import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, List, Container, Divider } from "semantic-ui-react";

class Sidebar extends Component {
  state = {};

  styles = {
    backgroundImage: "linear-gradient(#333333, #000000)",
    height: "85vh",
  };

  render() {
    return (
      <Container fluid style={this.styles}>
        <List horizontal style={{ marginTop: "20px" }}>
          <List.Item as="a">
            <h3>TOP</h3>
          </List.Item>
          <List.Item as="a">
            <h3>TRENDING</h3>
          </List.Item>
          <List.Item as="a">
            <h3>FRESH</h3>
          </List.Item>
        </List>
        <Divider horizontal inverted>
          CATEGORIES
        </Divider>
      </Container>
    );
  }
}

export default Sidebar;
