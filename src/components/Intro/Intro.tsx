import React from "react";
import { TypeAnimation } from "react-type-animation";

import "./Intro.css";

type IntroProps = {};

type IntroState = {};

class Intro extends React.Component<IntroProps, IntroState> {
  render() {
    return (
      <div id="whole-container">
        <h2 id="greetings">Hi, I'm</h2>
        <h4 className="about">
          <TypeAnimation
            sequence={[
              "A CS",
              300,
              "A Computer Science Major at UIUC",
              1000,
              "A Computer Science Major at the Univerist",
              100,
              "A Computer Science Major at the University of Illinois at Urbana-Champaign",
              ]}
            speed={60}
            style={{ fontSize: "2em" }}
          />
        </h4>
      </div>
    );
  }
}

export default Intro;
