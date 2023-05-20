import React, { useEffect, useRef, useState } from "react";

import TimelineObserver from "react-timeline-animation";

import "./Experience.css";
import amazonLogo from "../../../public/amazon_logo.jpg";

type TimelineProps = {
  setObserver: any;
  className: string;
};

const Timeline: React.FunctionComponent<TimelineProps> = ({ setObserver }) => {
  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circleStart = useRef(null);

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(circle1.current);
    setObserver(circle2.current);
    setObserver(circle3.current);
    setObserver(circleStart.current);
  }, []);

  return (
    <div className="wrapper">
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          Jun 2022 - Sep 2022
        </div>
      </div>
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          Jun 2021 - Dec 2021
        </div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          Oct 2018 - Feb 2020
        </div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div id="circleStart" ref={circleStart} className="circle" />
    </div>
  );
};

function Experience() {
  return (
    <div className="whole-section">
      <h1 className="section-header">Experience</h1>
      <div className="section-container">
        <div className="timeline-container">
          <TimelineObserver
            initialColor="#e5e5e5"
            fillColor="black"
            handleObserve={(setObserver) => (
              <Timeline className="timeline" setObserver={setObserver} />
            )}
          />
        </div>

        {/* amazon */}
        <div className="entries-container">
          <div className="entry">
            <div className="entry-title-container">
              <img
                src={process.env.PUBLIC_URL + "/amazon_logo.jpg"}
                className="company-logo"
              />
              <div className="entry-title">
                <h2>Software Development Engineer Intern</h2>
                <h3>Amazon &nbsp; &bull; &nbsp; Seattle, Washington</h3>
              </div>
            </div>

            <p className="entry-content">
              <ul className="summary-list">
                <li>
                  Designed scalable algorithm using <b>Java</b> to detect spikes
                  in app crashes and handle signal processing noise
                </li>
                <li>
                  Determined causes of spikes with <b>AWS Lambda</b> to send
                  notifications to internal teams, significantly reducing time
                  to fix crash causes
                </li>
                <li>
                  Wrote script to send mock data from <b>EC2</b> to{" "}
                  <b>DynamoDB</b> for extensive test coverage
                </li>
              </ul>
            </p>
          </div>

          {/* abbvie */}
          <div className="entry">
            <div className="entry-title-container">
              <img
                src={process.env.PUBLIC_URL + "/abbvie_logo.jpg"}
                className="company-logo"
              />
              <div className="entry-title">
                <h2>Web Developer/UX Design Intern</h2>
                <h3>AbbVie &nbsp; &bull; &nbsp; Champaign, Illinois</h3>
              </div>
            </div>

            <p className="entry-content">
              <ul className="summary-list">
                <li>
                  Create full stack web app using <b>Spring</b> and{" "}
                  <b>React.js</b> to allow employees to interact with internal
                  health study data in a user friendly design.
                </li>
                <li>
                  Connected app to 20 GB <b>MySQL</b> database of scientific
                  data, displaying the data in an intuitive interface.
                </li>
                <li>
                  Significantly improved data loading speeds from legacy app,
                  saving time for users.
                </li>
              </ul>
            </p>
          </div>

          {/* unt */}
          <div className="entry">
            <div className="entry-title-container">
              <img
                src={process.env.PUBLIC_URL + "/unt_logo.jpg"}
                className="company-logo"
              />
              <div className="entry-title">
                <h2>Undergrad Research Assistant</h2>
                <h3>
                  University of North Texas &nbsp; &bull; &nbsp; Denton, Texas
                </h3>
              </div>
            </div>

            <p className="entry-content">
              <ul className="summary-list">
                <li>
                  Worked on Reading with Robots, part of a larger project called
                  Companionbots that aims to help the elderly and those who
                  suffer the depression through dialoguing. Reading with Robots
                  uses <b>NLP</b>, <b>ML</b>, and an <b>EEG</b> to train a robot to read with the
                  elderly person and ask questions provoking deep thought about
                  the text.
                </li>
                <li>
                  Used E-Prime, a programming language tailored for computerized
                  experiments and MATLAB.
                </li>
                <li>
                  Presented research at the “Enabling Health Technologies”
                  workshop.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
