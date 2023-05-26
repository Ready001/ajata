import React from "react";

import { scrollTo } from "../../utils/scrollAnimation";
import "./Projects.css";

function Projects() {
  return (
    <div className="whole-section">
      <h1 className="section-header">Projects</h1>
      <div className="projects-navbar">
        <button
          className="projects-navlink"
          onClick={() => scrollTo("web-projects", 1000)}
        >
          Web
        </button>
        <button
          className="projects-navlink"
          onClick={() => scrollTo("ml-projects", 1000)}
        >
          AI & ML
        </button>
        <button
          className="projects-navlink"
          onClick={() => scrollTo("other-projects", 1000)}
        >
          Other
        </button>
      </div>
      <div className="project-section" id="web-projects">
        <h3 className="project-section-title">Web</h3>

        <div className="project-card">
          <img
            className="project-img top-img"
            src={process.env.PUBLIC_URL + "/project_imgs/coder_connect.jpg"}
            alt="CoderConnect's Landing Page"
          />
          <h4
            className="project-title linked-title"
            onClick={() =>
              window.open(
                "https://github.com/satyasuravaram/coderconnect",
                "_blank"
              )
            }
          >
            CoderConnect
          </h4>
          <h5 className="skills-used">
            <span>ReactJS</span>
            <span>&bull;</span>
            <span>ExpressJS</span>
            <span>&bull;</span>
            <span>NodeJS</span>
            <span>&bull;</span>
            <span>MongoDB</span>
            <span>&bull;</span>
            <span>WebRTC</span>
          </h5>
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
          </ul>
        </div>
        <div className="project-card">
          <img
            className="project-img top-img"
            src={process.env.PUBLIC_URL + "/project_imgs/playback.png"}
            alt="PlayBack's dashboard page"
          />
          <h4
            className="project-title linked-title"
            onClick={() =>
              window.open(
                "https://github.com/Sshatzkin/Audio-Feedback",
                "_blank"
              )
            }
          >
            Playback
          </h4>
          <h5 className="skills-used">
            <span>Firebase</span>
            <span>&bull;</span>
            <span>HTML5</span>
            <span>&bull;</span>
            <span>CSS3</span>
            <span>&bull;</span>
            <span>JavaScript</span>
          </h5>
          <ul>
            <li>
              Playback helps people give music students feedback in an
              asynchronous virtual way.
            </li>
            <li>Utilized Firebase for database and Google OAuth.</li>
          </ul>
        </div>

        <div className="project-card-left project-card">
          <div className="project-card-inner">
            <img
              className="project-img left-img"
              src={process.env.PUBLIC_URL + "/project_imgs/uni_news.png"}
              alt="Uni News Dashboard"
            />
          </div>
          <div className="project-card-inner">
            <h4 className="project-title">Uni News</h4>
            <h5 className="skills-used">
              <span>ReactJS</span>
              <span>&bull;</span>
              <span>NodeJS</span>
              <span>&bull;</span>
              <span>MongoDB</span>
              <span>&bull;</span>
              <span>Python (API)</span>
            </h5>

            <ul>
              <li>
                An aggregate news site that scrapes multiple university news
                sites to provide users with the latest news related to the
                universities they subscribe to.
              </li>
              <li>
                Created a{" "}
                <a href="https://github.com/Ready001/UniNewsScraper">
                  web scraper REST API
                </a>{" "}
                to provide Uni News with the latest articles from multiple
                university news websites.
              </li>
            </ul>
          </div>
        </div>

        <div className="project-card">
          <img
            className="project-img top-img"
            src={process.env.PUBLIC_URL + "/project_imgs/personal.png"}
            alt="This website"
          />
          <h4
            className="project-title linked-title"
            onClick={() =>
              window.open("https://github.com/Ready001/ajata", "_blank")
            }
          >
            My Personal Site
          </h4>
          <h5 className="skills-used">
            <span>React</span>
            <span>&bull;</span>
            <span>TypeScript</span>
            <span>&bull;</span>
            <span>Node</span>
            <span>&bull;</span>
            <span>Sass</span>
          </h5>

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
              alt="Gif of the AI playing Snake"
            />
          </div>
          <div className="project-card-inner">
            <h4 className="project-title">Reinforcement Learning Snake</h4>
            <h5 className="skills-used">Python &nbsp; &bull; &nbsp; Pygame</h5>
            <ul>
              <li>
                Made an AI agent to play snake based on the Q-learning
                algorithm.
              </li>
              <li>Utilized Pygame for the graphical elements.</li>
            </ul>
          </div>
        </div>

        <div className="project-card-left project-card">
          <div className="project-card-inner">
            <img
              className="project-img left-img"
              src={
                process.env.PUBLIC_URL + "/project_imgs/cnn_movie_reviews.png"
              }
              alt="The CNN"
            />
            <img
              className="project-img left-img"
              src={process.env.PUBLIC_URL + "/project_imgs/bigram.gif"}
              alt="Gif of the unigram/bigram code running and resulting accuracy scores"
            />
          </div>
          <div className="project-card-inner">
            <h4 className="project-title">Movie Review Sentiment Analysis</h4>
            <h5 className="skills-used">Python &nbsp; &bull; &nbsp; PyTorch</h5>

            <ul>
              <li>
                Performed sentiment analysis on movie reviews using both a CNN
                and a naive bayes unigram/bigram mixture model.
              </li>
              <li>
                Employed PyTorch for the Convolutional Neural Network (CNN)
                Model and made the unigram/bigram mixture model from scratch.
              </li>
            </ul>
          </div>
        </div>

        <div className="project-card-left project-card">
          <div className="project-card-inner">
            <img
              className="project-img left-img"
              src={process.env.PUBLIC_URL + "/project_imgs/clip.png"}
              alt="prediction made by the model"
            />
          </div>
          <div className="project-card-inner">
            <h4 className="project-title">Flower Type Prediction</h4>
            <h5 className="skills-used">Python &nbsp; &bull; &nbsp; CLIP</h5>

            <ul>
              <li>
                Utilized OpenAI's{" "}
                <a href="https://github.com/OpenAI/CLIP">CLIP</a> neural network
                to determine flower type from images.
              </li>
            </ul>
          </div>
        </div>

        <div className="project-card">
          <img
            className="project-img left-img"
            src={process.env.PUBLIC_URL + "/project_imgs/dep_tree.png"}
            alt="dependency tree generated by the neural network"
          />
          <div className="project-card-inner">
            <h4 className="project-title">Neural Network Dependency Parser</h4>
            <h5 className="skills-used">
              <span>Python</span>
              <span>&bull;</span>
              <span>PyTorch</span>
              <span>&bull;</span>
              <span>spaCy</span>
            </h5>

            <ul>
              <li>
                Built a neural transition-based dependency parser based on the
                paper{" "}
                <a href="https://nlp.stanford.edu/pubs/emnlp2014-depparser.pdf">
                  A Fast and Accurate Dependency Parser using Neural Networks
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="project-card">
          <img
            className="project-img top-img"
            src={process.env.PUBLIC_URL + "/project_imgs/word_embeddings.png"}
            alt="top 100 word embeddings generated by the model"
          />
          <div className="project-card-inner">
            <h4 className="project-title">CBOW Embeddings</h4>
            <h5 className="skills-used">
              <span>Python</span>
              <span>&bull;</span>
              <span>PyTorch</span>
              <span>&bull;</span>
              <span>Plotly</span>
            </h5>
            <ul>
              <li>
                Generated dense continuous-bag-of-words (CBOW) embeddings from
                WikiText-2, a corpus of wikipedia articles.
              </li>
              <li>
                Used a context of 4 words (the previous 2 words and the next 2
                words)
              </li>
            </ul>
          </div>
        </div>

        <div className="project-card project-card-left">
          <div className="project-card-inner">
            <img
              className="project-img left-img"
              src={process.env.PUBLIC_URL + "/project_imgs/viterbi.gif"}
              alt="gif of the code running"
            />
          </div>
          <div className="project-card-inner">
            <h4 className="project-title">HMM POS Tagging</h4>
            <h5 className="skills-used">
              <span>Python</span>
            </h5>
            <ul>
              <li>
                Created a Hidden Markov Model (HMM) using the Viterbi algorithm
                for part of speech (POS) tagging.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="project-section" id="other-projects">
        <h3 className="project-section-title">Other</h3>

        <div className="project-card">
          <img
            className="project-img top-img"
            src={process.env.PUBLIC_URL + "/project_imgs/weather_app.png"}
            style={{ width: "10rem" }}
            alt="login screen from an Android Studio simulation"
          />
          <div className="project-card-inner">
            <h4 className="project-title">Android Location App</h4>
            <h5 className="skills-used">
              <span>Java</span>
              <span>&bull;</span>
              <span>Espresso</span>
            </h5>
            <ul>
              <li>
                An app which combines Google Maps API and OpenWeather API to
                give detailed information about a set of locations the user has
                added
              </li>
              <li>
                Utilized Espresso and JUnit to make a comprehensive test suite
                with instrumented tests, unit tests, mock tests, and more.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
