import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import { HashRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        {/*<Auth>*/}
        <Router>
          <Layout />
        </Router>
        {/*</Auth>*/}
      </>
    );
  }
}

export default App;
