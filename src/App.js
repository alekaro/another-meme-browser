import React, { Component } from "react";
import Topbar from "./components/Topbar";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import BookList from "./components/BookList";

// apollo client setup
const client = new ApolloClient({
  uri: "http://192.168.1.10:4000/graphql",
});

class App extends Component {
  styles = {
    backgroundColor: "#000000",
    height: "100vh",
    fontWeight: "bold",
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div style={this.styles}>
            <Topbar />
            <BookList />
            <Route exact path="/" component={Home} />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
