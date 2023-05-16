import React, { useEffect, useRef, useState } from "react";
import Nav from "react-bootstrap/Nav";

import Intro from "../Intro/Intro";
import "./Home.css";
import useOnScreen from "./UseOnScreen";

function Home() {
  const [navClass, setNavClass] = useState("");

  const handleScroll = () => {
    var scrollTop: number = window.scrollY;
    if (scrollTop > 1) {
      setNavClass("small");
    } else {
      setNavClass("");
    }
  };

  window.addEventListener("scroll", handleScroll);

  
  const section1: any = useRef();
  const section1_class = useOnScreen(section1);
  const section2: any = useRef();
  const section2_class = useOnScreen(section2);
  const section3: any = useRef();
  const section3_class = useOnScreen(section3);
  const section4: any = useRef();
  const section4_class = useOnScreen(section4);
  const section5: any = useRef();
  const section5_class = useOnScreen(section5);

  return (
    <div>
      <header>
        <div className={navClass} id="navbar-container">
          <h1>
            <a href="#">Ajata Reddy</a>
          </h1>
          <nav>
            <ul>
              <li>
                <a href="#1" className={section1_class}>
                  About me
                </a>
              </li>
              <li>
                <a href="#2" className={section2_class}>Experience</a>
              </li>
              <li>
                <a href="#3" className={section3_class}>Education</a>
              </li>
              <li>
                <a href="#4" className={section4_class}>Projects</a>
              </li>
              <li>
                <a href="#5" className={section5_class}>Skills</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="1" ref={section1}>
        <Intro />
      </section>
      <section id="2" ref={section2}>
        <h1>Second</h1>
      </section>
      <section id="3" ref={section3}>
        <h1>Third</h1>
      </section>
      <section id="4" ref={section4}>
        <h1>Fourth </h1>
      </section>
      <section id="5" ref={section5}>
        <h1>Fifth</h1>
      </section>
    </div>
  );
}

export default Home;
