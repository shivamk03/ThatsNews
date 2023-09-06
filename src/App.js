import "./App.css";
import React, { Component } from "react";
import News from "./Components/News.js";
import { HashRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./Components/Navbar.js";
import HamburgerNav from "./Components/HamburgerNav";
export default class App extends Component {
  apikey= "73b83e92b54b4155a2416bada75369e9";
  state = {
    setProgress: 0,
    HamburgerStatus: false,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  };
  setstatus = () => {
    window.innerWidth < 900
      ? this.setState({ HamburgerStatus: true })
      : this.setState({ HamburgerStatus: false });
  };
  componentDidUpdate() {
    window.addEventListener("resize", this.setstatus);
  }
  setProgress = (setProgress) => {
    this.setState({ setProgress: setProgress });
  };
  render() {
    return (
      <div>
        <HashRouter>
          {!this.state.HamburgerStatus && <Navbar />}
          {this.state.HamburgerStatus && (
            <HamburgerNav HamburgerStatus={this.state.HamburgerStatus} />
          )}
          <LoadingBar
            color="#f11946"
            progress={this.state.setProgress}
            height={4}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  category="General"
                  key="News"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  category="Business"
                  key="Business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  category="Entertainment"
                  key="Entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  category="Health"
                  key="Health"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  category="General"
                  key="General"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  category="Science"
                  key="Science"
                />
              }
            />
            {/* <Route exact path="/News" element={} /> */}
          </Routes>
        </HashRouter>
      </div>
    );
  }
}
