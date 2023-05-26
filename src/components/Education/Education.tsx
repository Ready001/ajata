import React from "react";

import "./Education.css";

interface class_obj {
  classId: string;
  className: string;
  classLink: string;
}

const classes_list: Array<class_obj> = [
  {
    classId: "CS 447",
    className: "Natural Language Programming",
    classLink: "https://cs.illinois.edu/academics/courses/cs447",
  },
  {
    classId: "CS 441",
    className: "Applied Machine Learning",
    classLink: "https://cs.illinois.edu/academics/courses/cs441",
  },
  {
    classId: "CS 440",
    className: "Artificial Intelligence",
    classLink: "https://cs.illinois.edu/academics/courses/cs440",
  },
  {
    classId: "CS 427",
    className: "Software Engineering",
    classLink: "https://cs.illinois.edu/academics/courses/cs427",
  },
  {
    classId: "CS 421",
    className: "Programming Languages & Compilers",
    classLink: "https://cs.illinois.edu/academics/courses/cs421",
  },
  {
    classId: "CS 412",
    className: "Data Mining",
    classLink: "https://cs.illinois.edu/academics/courses/cs412",
  },
  {
    classId: "CS 411",
    className: "Database Systems",
    classLink: "https://cs.illinois.edu/academics/courses/cs411",
  },
  {
    classId: "CS 409",
    className: "Web Programming",
    classLink: "https://cs.illinois.edu/academics/courses/cs409",
  },
  {
    classId: "CS 374",
    className: "Algorithms and Models of Computation",
    classLink: "https://cs.illinois.edu/academics/courses/cs374",
  },

  {
    classId: "CS 361",
    className: "Probabilities & Statistics for CS",
    classLink: "https://cs.illinois.edu/academics/courses/cs361",
  },
  {
    classId: "CS 357",
    className: "Numerical Methods",
    classLink: "https://cs.illinois.edu/academics/courses/cs357",
  },

  {
    classId: "CS 341",
    className: "Systems Programming",
    classLink: "https://cs.illinois.edu/academics/courses/cs341",
  },
  {
    classId: "CS 233",
    className: "Computer Architecture",
    classLink: "https://cs.illinois.edu/academics/courses/cs233",
  },
  {
    classId: "CS 225",
    className: "Data Structures",
    classLink: "https://cs.illinois.edu/academics/courses/cs225",
  },
  {
    classId: "CS 173",
    className: "Discrete Structures",
    classLink: "https://cs.illinois.edu/academics/courses/cs173",
  },
  {
    classId: "CS 126",
    className: "Software Design Studio",
    classLink: "https://cs.illinois.edu/academics/courses/cs126",
  },
  {
    classId: "MATH 415",
    className: "Applied Linear Algebra",
    classLink: "https://netmath.illinois.edu/college/math-415",
  },
  {
    classId: "STAT 400",
    className: "Statistics and Probability",
    classLink: "https://courses.illinois.edu/schedule/2022/spring/STAT/400",
  },

  
  
];

const colors: Array<string> = ["#13294Bd9", "#E84A27f0"];

const goToLink = (classLink: string) => {
  window.open(classLink, "_blank");
};

function Education() {
  return (
    <div className="whole-section">
      <h1 className="section-header">Education</h1>
      <div className="education-container">
        <div className="uiuc-card">
          <img
            src={process.env.PUBLIC_URL + "/uiuc_logo.jpg"}
            className="company-logo"
            alt="Logo of the University of Illinois at Urbana-Champaign"
          />
          <div className="entry-title">
            <h2>University of Illinois at Urbana-Champaign</h2>
            <h3>B.S. in Computer Science &nbsp; &bull; &nbsp; 2020-2023</h3>
          </div>
        </div>
        <div className="classes-container">
          <h4>&bull; Classes Taken &bull;</h4>
          <div className="classes">
            {classes_list.map((c, index) => {
              return (
                <div
                  className={"class " + (index % 2 === 0 ? "blue" : "orange")}
                  style={{ backgroundColor: colors[index % 2] }}
                  onClick={() => goToLink(c.classLink)}
                >
                  <span className="classId">{c.classId}</span>: &nbsp;
                  <span className="className">{c.className}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
