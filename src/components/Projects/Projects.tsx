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
            CoderConnect - Volunteer Tutoring Website
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
              Developed and launched CoderConnect, a responsive volunteer
              tutoring website for students.
            </li>
            <li>
              Utilized MERN stack (MongoDB, Express.js, React.js, Node.js) for
              seamless front-end and back-end integration.
            </li>
            <li>
              Created a user-friendly interface, allowing students to easily
              connect with volunteer tutors for personalized programming
              guidance.
            </li>
            <li>
              Collaborated with a team of developers to coordinate efforts and
              streamline development processes.
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
            Playback - Video Feedback Platform
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
              Developed and launched Playback, a web platform where users can
              submit videos and receive feedback at specific timestamps.
            </li>
            <li>
              Designed with a focus on facilitating asynchronous feedback for
              music students during the COVID-19 pandemic.
            </li>
            <li>
              Implemented intuitive features allowing users to upload videos and
              receive targeted feedback from peers or teachers.
            </li>
            <li>
              Enabled timestamp-based commenting system, streamlining the
              feedback process by providing precise feedback at specific
              moments.
            </li>
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
            <h4 className="project-title">
              UniNews - University News Aggregation Website
            </h4>
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
                Developed and launched UniNews, an aggregate news site that
                collects and presents the latest news from multiple university
                sources.
              </li>
              <li>
                Designed and implemented a{" "}
                <a href="https://github.com/Ready001/UniNewsScraper">
                  web scraper REST API
                </a>{" "}
                to fetch and consolidate news articles from various university
                news websites.
              </li>
              <li>
                Implemented a user subscription system, allowing users to
                customize their news feed based on the universities they are
                interested in.
              </li>
              <li>
                Implemented search and filtering functionality to enable users
                to find specific news articles or topics of interest.
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
            My Portfolio Site
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
            <li>
              Developed and launched this website you are on right now, a
              responsive website showcasing my portfolio and skills.
            </li>
            <li>
              Implemented intelligent filter algorithms in the skills section
              that consider related words, enabling users to find relevant
              skills beyond exact matches.
            </li>
            <li>
              An example of this filtering algorithm is searching for "java"
              also shows its libraries and frameworks. You could also search for
              topics like computer vision and get related skills.
            </li>
            <li>
              Implemented interactive features and animations to enhance user
              engagement and visual appeal.
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
                Developed an AI agent using the Q-learning algorithm to play the
                classic Snake game.
              </li>
              <li>
                Implemented the Q-learning algorithm to enable the AI agent to
                learn and make decisions based on rewards and penalties.
              </li>
              <li>
                Conducted extensive experimentation and fine-tuning of the
                Q-learning parameters to enhance the AI agent's performance.
              </li>
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
                Conducted sentiment analysis on movie reviews using two
                different models: a Convolutional Neural Network (CNN) and a
                naive Bayes unigram/bigram mixture model.
              </li>
              <li>
                Employed PyTorch for the Convolutional Neural Network (CNN)
                Model and made the unigram/bigram mixture model from scratch.
              </li>
              <li>
                Constructed the unigram/bigram mixture model, combining unigrams
                and bigrams to capture contextual information for sentiment
                classification.
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
                Developed a flower type classification system using OpenAI's{" "}
                <a href="https://github.com/OpenAI/CLIP">CLIP</a> neural
                network.
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
                Implemented a neural transition-based dependency parser based on
                the paper{" "}
                <a href="https://nlp.stanford.edu/pubs/emnlp2014-depparser.pdf">
                  A Fast and Accurate Dependency Parser using Neural Networks
                </a>
              </li>
              <li>
                Studied and analyzed the research paper to understand the
                underlying concepts and algorithms.
              </li>
              <li>
                Developed the neural transition-based dependency parser from
                scratch, following the methodology and architecture outlined in
                the paper.
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
                Designed a context window of 4 words, considering the previous 2
                words and the next 2 words as the context for generating
                embeddings.
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
                Developed a Hidden Markov Model (HMM) for part-of-speech (POS)
                tagging.
              </li>
              <li>
                Implemented the Viterbi algorithm to efficiently compute the
                most probable sequence of POS tags given an input sentence.
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
            <h4 className="project-title">Android Location Info App</h4>
            <h5 className="skills-used">
              <span>Java</span>
              <span>&bull;</span>
              <span>Espresso</span>
            </h5>
            <ul>
              <li>
                Developed an app that integrates Google Maps API and OpenWeather
                API to provide detailed information about user-defined
                locations.
              </li>
              <li>
                Created a comprehensive test suite using Espresso and JUnit,
                incorporating instrumented tests, unit tests, and mock tests to
                ensure robust and reliable functionality.
              </li>
              <li>
                Employed Agile methodologies for effective project management,
                ensuring timely feature delivery and iterative development.
              </li>
              <li>
                Followed best practices for code quality, maintainability, and
                performance optimization throughout the development lifecycle.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
