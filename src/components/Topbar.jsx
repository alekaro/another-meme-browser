import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Container, Menu, Sticky } from "semantic-ui-react";
import AMB_logo from "../res/AMB_logo.png";
import { Link } from "react-router-dom";
import { LoginModal } from "./LoginModal";
import { RegisterModal } from "./RegisterModal";

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
              <img
                width="80"
                height="80"
                src={AMB_logo}
                alt="Website logo"
              ></img>
            </Link>
            <Menu.Item position="right">
              <LoginModal />
              <RegisterModal />
            </Menu.Item>
          </Container>
        </Menu>
      </Sticky>
    );
  }
}

export default Topbar;
