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
              "A Computer Science Major at UIUC",
              1000,
              "A Computer Science Major at the Univerist",
              100,
              "A Computer Science Major at the University of Illinois at Urbana-Champaign",
              ]}
            speed={60}
          />
          <br/>
          <br/>
          <TypeAnimation
            sequence={
              [
              5000,
              "I enjoy hiking",
              1000,
              "I enjoy reading",
              1000,
              "I enjoy rock climbing",
              1000,
              "I enjoy cooking",
              ]}
            speed={40}
            cursor={false}
            repeat={Infinity}
          />
        </h4>
      </div>
    );
  }
}

export default Intro;
