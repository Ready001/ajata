import React, { useEffect, useRef } from "react";

import TimelineObserver from "react-timeline-animation";

import "./Experience.css";

type TimelineProps = {
  setObserver: ((ref: any) => void) | undefined;
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
    if (setObserver) {
      setObserver(timeline1.current);
      setObserver(timeline2.current);
      setObserver(timeline3.current);
      setObserver(circle1.current);
      setObserver(circle2.current);
      setObserver(circle3.current);
      setObserver(circleStart.current);
    } //eslint-disable-next-line
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
                alt="Logo of Amazon"
              />
              <div className="entry-title">
                <h2>Software Development Engineer Intern</h2>
                <h3>Amazon &nbsp; &bull; &nbsp; Seattle, Washington</h3>
              </div>
            </div>

            <div className="entry-content">
              <ul className="summary-list">
                <li>
                  Designed and implemented a scalable algorithm using{" "}
                  <b>Java</b> to detect spikes in app crashes, enhancing the
                  company's ability to identify critical issues promptly.
                </li>
                <li>
                  Utilized <b>AWS Lambda</b> to analyze crash data and determine
                  the causes of spikes, resulting in efficient notification
                  delivery to internal teams.
                </li>
                <li>
                  Developed a script to generate and send mock data from{" "}
                  <b>EC2</b> instances to <b>DynamoDB</b>, ensuring
                  comprehensive test coverage and validating the system's
                  performance under various scenarios.
                </li>
                <li>
                  Documented the design, implementation details, and usage
                  instructions for the developed features, facilitating
                  knowledge sharing and future maintenance.
                </li>
              </ul>
            </div>
          </div>

          {/* abbvie */}
          <div className="entry">
            <div className="entry-title-container">
              <img
                src={process.env.PUBLIC_URL + "/abbvie_logo.jpg"}
                className="company-logo"
                alt="Logo of AbbVie"
              />
              <div className="entry-title">
                <h2>Web Developer/UX Design Intern</h2>
                <h3>AbbVie &nbsp; &bull; &nbsp; Champaign, Illinois</h3>
              </div>
            </div>

            <div className="entry-content">
              <ul className="summary-list">
                <li>
                  Developed a full-stack web application using <b>Spring</b> and
                  React.js, providing employees with an intuitive interface to
                  interact with internal data.
                </li>
                <li>
                  Successfully connected the web application to a large MySQL
                  database containing scientific data, enabling seamless data
                  retrieval and display.
                </li>
                <li>
                  Designed a user-friendly interface, prioritizing ease of use
                  and ensuring employees can efficiently access and analyze the
                  data.
                </li>
                <li>
                  Implemented optimizations to significantly improve data
                  loading speeds compared to the legacy application, enhancing
                  user productivity and saving valuable time.
                </li>
              </ul>
            </div>
          </div>

          {/* unt */}
          <div className="entry">
            <div className="entry-title-container">
              <img
                src={process.env.PUBLIC_URL + "/unt_logo.jpg"}
                className="company-logo"
                alt="Logo of the University of North Texas"
              />
              <div className="entry-title">
                <h2>Undergrad Research Assistant</h2>
                <h3>
                  University of North Texas &nbsp; &bull; &nbsp; Denton, Texas
                </h3>
              </div>
            </div>

            <div className="entry-content">
              <ul className="summary-list">
                <li>
                Contributed to the "Reading with Robots" project, a part of the larger Companionbots initiative aimed at assisting the elderly and individuals suffering from depression through dialogue-based interactions.
                </li>
                <li>
                Employed an EEG (Electroencephalography) to capture brain activity during the question sessions, further enhancing the understanding of cognitive responses.
                </li>
                <li>Utilized E-Prime, a specialized programming language for computerized experiments, to develop the experimental framework for the EEG.</li>
                <li>
                Presented the research findings at the "Enabling Health Technologies" workshop, sharing insights and contributing to the academic discourse in the field.
                </li>
                <li>Contributed to the advancement of the Companionbots project and gained valuable research experience in the field of human-robot interaction and cognitive psychology.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
