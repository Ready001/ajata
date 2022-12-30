import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

import "./Home.css";

type HomeProps = {};

type HomeState = {
  navClass: string;
};
class Home extends React.Component<HomeProps, HomeState> {
  state: HomeState = {
    navClass: "small",
  };

  componentDidMount(): void {
    this.setState(() => ({ navClass: "" }));
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var scrollTop: number = window.scrollY;
    if (scrollTop > 1) {
      this.setState(() => ({ navClass: "small" }));
    } else {
      this.setState(() => ({ navClass: "" }));
    }
  };

  render() {
    const { navClass } = this.state;
    return (
      <div onScroll={this.handleScroll}>
        <header>
          <div className={navClass} id="navbar-container">
            <h1>
              <a href="#">Ajata Reddy</a>
            </h1>
            <nav>
              <ul>
                <li>
                  <a href="#1">About me</a>
                </li>
                <li>
                  <a href="#2">Experience</a>
                </li>
                <li>
                  <a href="#3">Education</a>
                </li>
                <li>
                  <a href="#4">Projects</a>
                </li>
                <li>
                  <a href="#5">Skills</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <section id="1">
          <h1>Hi, I'm</h1>
        </section>
        <section id="2">
          <h1>Second</h1>
        </section>
        <section id="3">
          <h1>Third</h1>
        </section>
        <section id="4">
          <h1>Fourth </h1>
        </section>
        <section id="5">
          <h1>Fifth</h1>
        </section>
      </div>
    );
  }
}

type Props = {
  navSmall: string;
};

export default Home;
