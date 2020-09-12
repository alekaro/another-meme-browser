import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Container, Menu, Sticky, Modal } from "semantic-ui-react";
import AMB_logo from "../res/AMB_logo.png";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

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
              <LoginModal />
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
