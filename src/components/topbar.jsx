import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Container, Menu, Segment } from "semantic-ui-react";
import AMB_logo from "../res/AMB_logo.png";
import header_AMB from "../res/header_AMB.png";

class Topbar extends Component {
  state = {};

  render() {
    return (
      <Segment
        textAlign="center"
        style={{
          backgroundColor: "yellow",
          padding: "0em 0em",
        }}
        vertical
        fixed="top"
      >
        <Menu
          size="large"
          style={{ backgroundColor: "inherit", padding: "0.7em 0em" }}
        >
          <Container fluid>
            <a href="/" className="m-1">
              <img width="80" height="80" src={AMB_logo}></img>
            </a>
            <img
              position="center"
              width="450"
              height="108"
              src={header_AMB}
            ></img>
            <Menu.Item position="right">
              <Button inverted secondary as="a">
                Log in
              </Button>
              <Button inverted secondary as="a">
                Sign Up
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>
    );
  }
}

export default Topbar;
