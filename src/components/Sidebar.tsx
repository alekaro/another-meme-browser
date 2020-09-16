import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, List, Container, Divider } from "semantic-ui-react";

const Sidebar = () => {

  const styles = {
    backgroundImage: "linear-gradient(#333333, #000000)",
    height: "85vh",
    width: "100%"
  };

  return (
    <div style={styles}>
      <List horizontal style={{ margin: "20px", marginBottom: "0px" }}>
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
    </div>
  );

}
export default Sidebar;