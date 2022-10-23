import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header>
          <Navbar />
        </header>
        <main>
          <Home />
        </main>
        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
