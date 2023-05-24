import React, { useEffect, useRef, useState } from "react";

import { scrollTo } from "../../utils/scrollAnimation";
import "./Projects.css";

function Projects() {
  return (
    <div className="whole-section">
      <h1 className="section-header">Projects</h1>
      <div className="projects-navbar">
        <a
          className="projects-navlink"
          onClick={() => scrollTo("web-projects", 1000)}
        >
          Web
        </a>
        <a
          className="projects-navlink"
          onClick={() => scrollTo("ml-projects", 1000)}
        >
          AI & ML
        </a>
        <a
          className="projects-navlink"
          onClick={() => scrollTo("other-projects", 1000)}
        >
          Other
        </a>
      </div>
      <div className="project-section" id="web-projects">
        <h3 className="project-section-title">Web</h3>

        <div className="project-card">
          <img
            className="project-img top-img"
            src={process.env.PUBLIC_URL + "/project_imgs/coder_connect.jpg"}
          />
          <h4
            className="project-title"
            onClick={() =>
              window.open(
                "https://github.com/satyasuravaram/coderconnect",
                "_blank"
              )
            }
          >
            CoderConnect
          </h4>
          <ul>
            <li>
              CoderConnect is a volunteer tutoring website for students who wish
              to learn to program.
            </li>
            <li>Managed integration of front-end and back-end.</li>
            <li>
              Made site highly responsive and improved UX while working in an
              agile environment.
            </li>
            <li>
              Made with MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS) and
              WebRTC.
            </li>
          </ul>
        </div>
        <div className="project-card">
          <img
            className="project-img top-img"
            src={process.env.PUBLIC_URL + "/project_imgs/playback.png"}
          />
          <h4
            className="project-title"
            onClick={() =>
              window.open(
                "https://github.com/Sshatzkin/Audio-Feedback",
                "_blank"
              )
            }
          >
            Playback
          </h4>
          <ul>
            <li>
              Playback helps people give music students feedback in an
              asynchronous virtual way.
            </li>
            <li>Used HTML, CSS, and JS with Bootstrap.</li>
            <li>Utilized Firebase for database and Google OAuth.</li>
          </ul>
        </div>
        <div className="project-card">
          <img
            className="project-img top-img"
            src={process.env.PUBLIC_URL + "/project_imgs/personal.png"}
          />
          <h4
            className="project-title"
            onClick={() =>
              window.open("https://github.com/Ready001/ajata", "_blank")
            }
          >
            My Personal Site
          </h4>
          <ul>
            <li>This website you are on right now.</li>
            <li>Used React, Node, and Typescript.</li>
            <li>
              Implemented search functionality for skills section that also
              looks at related words (e.g. searching for "java" also shows its
              libraries and frameworks).
            </li>
          </ul>
        </div>
      </div>
      <div className="project-section" id="ml-projects">
        <h3 className="project-section-title">AI and Machine Learning</h3>

        <div className="project-card-left project-card">
            <div className="project-card-inner">
          <img
            className="project-img left-img"
            src={process.env.PUBLIC_URL + "/project_imgs/snake.gif"}
          />
          </div>
          <div className="project-card-inner">
            <h4 className="project-title">Reinforcement Learning Snake</h4>
            <ul>
              <li>
                Made an AI agent to play snake based on the Q-learning
                algorithm.
              </li>
              <li>Utilized pygame for the graphical elements.</li>
            </ul>
          </div>
        </div>

        <div className="project-card-left project-card">
            <div className="project-card-inner">
                                <img
            className="project-img left-img"
            src={process.env.PUBLIC_URL + "/project_imgs/cnn_movie_reviews.png"}
          />
          <img
            className="project-img left-img"
            src={process.env.PUBLIC_URL + "/project_imgs/bigram.gif"}
          />
          </div>
          <div className="project-card-inner">
            <h4 className="project-title">Movie Review Sentiment Analysis</h4>
            <ul>
              <li>
                Performed sentiment analysis on movie reviews using both a CNN and a bigram model.
              </li>
              <li>Utilized pygame for the graphical elements.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="project-section" id="other-projects">
        <h3 className="project-section-title">Other</h3>

        <div className="project-card"></div>
      </div>
    </div>
  );
}

export default Projects;
