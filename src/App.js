import React, { Component } from "react";
import Topbar from "./components/Topbar";
import Home from "./components/Home";
import { Register } from "./components/Register";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import BookList from "./components/BookList";

// apollo client setup
const client = new ApolloClient({
  uri: "http://87.99.45.234:4000/graphql",
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
            <Route path="/register" component={Register} />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
