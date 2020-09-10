import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Container, Menu, Sticky } from "semantic-ui-react";
import AMB_logo from "../res/AMB_logo.png";
import header_AMB from "../res/header_AMB.png";
import { Link } from "react-router-dom";

class Topbar extends Component {
  state = {};

  render() {
    return (
      <Sticky>
        <Menu
          size="large"
          style={{
            backgroundColor: "yellow",
            padding: "0em 0em",
          }}
        >
          <Container fluid style={{}}>
            <Link to="/" className="m-1">
              <img width="80" height="80" src={AMB_logo}></img>
            </Link>
            <Menu.Item position="right">
              <Button inverted secondary as="a">
                Log in
              </Button>
              <Button as={Link} inverted secondary to="/register">
                Sign Up
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
      </Sticky>
    );
  }
}

export default Topbar;
