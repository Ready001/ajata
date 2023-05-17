import React, { useEffect, useRef, useState } from "react";
import { scrollAnimation } from "../../utils/scrollAnimation";

import Intro from "../Intro/Intro";
import "./Home.css";
import useOnScreen from "./UseOnScreen";
import Experience from "../Experience/Experience";

function Home() {
  const [navClass, setNavClass] = useState("");

  //makes name smaller and go into navbar if scrolled down
  const handleScroll = () => {
    var scrollTop: number = window.scrollY;
    if (scrollTop > 1) {
      setNavClass("small");
    } else {
      setNavClass("");
    }
  };

  window.addEventListener("scroll", handleScroll);


  //duration of scroll animation for navbar scroll
  const scrollAnimationDuration = 2000;

  //smooth scroll to an element
  const scrollTo = (id: string) => {
    let element = document.getElementById(id)

    if(element != null){
      scrollAnimation(element.offsetTop, window.scrollY, scrollAnimationDuration)
    }

  }


  
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
            <a>Ajata Reddy</a>
          </h1>
          <nav>
            <ul>
              <li>
                <a className={section1_class} onClick={() => scrollTo("1")}>
                  About me
                </a>
              </li>
              <li>
                <a className={section2_class} onClick={() => scrollTo("2")}>Experience</a>
              </li>
              <li>
                <a className={section3_class} onClick={() => scrollTo("3")}>Education</a>
              </li>
              <li>
                <a className={section4_class} onClick={() => scrollTo("4")}>Projects</a>
              </li>
              <li>
                <a className={section5_class} onClick={() => scrollTo("5")}>Skills</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="1" ref={section1}>
        <Intro />
      </section>
      <section id="2" ref={section2}>
        <Experience />
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
