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
              "A DE",
              300,
              "A Data Engineer",
              400,
              "A Data Engineer at State Farm",
              ]}
            speed={50}
          />
          <br/>
          <br/>
          <TypeAnimation
            sequence={
              [
              2000,
              "I enjoy hiking",
              1000,
              "I enjoy reading",
              1000,
              "I enjoy messing with linux",
              1000,
              "I enjoy cooking",
              1000,
              "I enjoy gaming"
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
