import React, { useEffect, useRef, useState } from "react";

import TimelineObserver from "react-timeline-animation";
import "./Experience.css";

type TimelineProps = {
  setObserver: any;
  callback: any;
  className: string;
};

const Timeline: React.FunctionComponent<TimelineProps> = ({
  setObserver,
  callback,
}) => {
  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(circle1.current, callback());
    setObserver(circle2.current, callback());
    setObserver(circle3.current, callback());
  }, []);

  return (
    <div className="wrapper">
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          June 2020-July 2021
        </div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          2
        </div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          3
        </div>
      </div>
    </div>
  );
};

function Experience() {
  const onCallback = () => {
    console.log("awesome");
  };
  return (
    <div className="whole-section">
      <h1 className="section-header">Experience</h1>
      <div className="section-container">
        <div className="timeline-container">
          <TimelineObserver
            initialColor="#e5e5e5"
            fillColor="black"
            handleObserve={(setObserver) => (
              <Timeline
                callback={onCallback}
                className="timeline"
                setObserver={setObserver}
              />
            )}
          />
        </div>
        <div className="entries-container">
          <div className="entry">a</div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
