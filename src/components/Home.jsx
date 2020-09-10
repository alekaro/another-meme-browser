import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Wall from "./Wall";
import { Grid } from "semantic-ui-react";

class Home extends Component {
  state = {};

  styles = {
    backgroundColor: "#000000",
    height: "100vh",
    fontWeight: "bold",
  };

  render() {
    return (
      <React.Fragment>
        <Grid>
          <Grid.Column
            width={13}
            style={{ paddingLeft: "30px", marginTop: "20px" }}
          >
            <Wall />
          </Grid.Column>
          <Grid.Column width={3} style={{ paddingLeft: "0px" }}>
            <Sidebar />
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Home;
