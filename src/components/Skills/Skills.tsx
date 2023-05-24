import React, { useEffect, useState } from "react";

import { skills_full, skill_entry, Categories } from "./SkillsList";
import "./Skills.css";

function Skills() {
  //states
  const [skills, setSkills] = useState(skills_full);

  const [langSkills, setLangSkills] = useState(
    skills_full.filter((skill) => skill.category == Categories.languages)
  );

  const [cloudSkills, setCloudSkills] = useState(
    skills_full.filter((skill) => skill.category == Categories.cloud)
  );

  const [dbSkills, setDbSkills] = useState(
    skills_full.filter((skill) => skill.category == Categories.db)
  );

  const [libSkills, setLibSkills] = useState(
    skills_full.filter((skill) => skill.category == Categories.lib)
  );

  const [otherSkills, setOtherSkills] = useState(
    skills_full.filter((skill) => skill.category == Categories.other)
  );

  //update per category states when all skills state updates
  useEffect(() => {
    setLangSkills(
      skills.filter((skill) => skill.category == Categories.languages)
    );
    setCloudSkills(
      skills.filter((skill) => skill.category == Categories.cloud)
    );
    setDbSkills(skills.filter((skill) => skill.category == Categories.db));
    setLibSkills(skills.filter((skill) => skill.category == Categories.lib));
    setOtherSkills(
      skills.filter((skill) => skill.category == Categories.other)
    );
  }, [skills]);

  const handleChange = (e: any) => {
    e.preventDefault();
    filterSkills(e.target.value.toLowerCase());
  };

  const filterSkills = (searchInput: string) => {
    var filtered_skills: Array<skill_entry> = [];
    skills_full.forEach((skill) => {
      if (skill.name.toLowerCase().includes(searchInput)) {
        filtered_skills.push(skill);
      }
    });

    skills_full.forEach((skill) => {
      if (!filtered_skills.includes(skill)) {
        if (
          skill.related.some(
            (x) =>
              x.toLowerCase().includes(searchInput.toLowerCase()) ||
              searchInput.toLowerCase().includes(x.toLowerCase())
          )
        ) {
          filtered_skills.push(skill);
        }
      }
    });

    setSkills(filtered_skills);
    return "updated";
  };

  return (
    <div className="whole-section">
      <h1 className="section-header">Skills</h1>
      <div className="skills-section">
        <div className="search-bar-container">
          <input
            type="search"
            onChange={handleChange}
            id="search-bar"
            placeholder="Search"
          />
        </div>

        <div className="skills-container">
          {langSkills.length > 0 && (
            <h4 className="category-title">{Categories.languages}</h4>
          )}
          <div className="category-skills">
            {langSkills.map((skill) => {
              return <SkillCard skillName={skill.name} />;
            })}
          </div>
          {cloudSkills.length > 0 && (
            <h4 className="category-title">{Categories.cloud}</h4>
          )}
          <div className="category-skills">
            {cloudSkills.map((skill) => {
              return <SkillCard skillName={skill.name} />;
            })}
          </div>
          {dbSkills.length > 0 && (
            <h4 className="category-title">{Categories.db}</h4>
          )}
          <div className="category-skills">
            {dbSkills.map((skill) => {
              return <SkillCard skillName={skill.name} />;
            })}
          </div>
          {libSkills.length > 0 && (
            <h4 className="category-title">{Categories.lib}</h4>
          )}{" "}
          <div className="category-skills">
            {libSkills.map((skill) => {
              return <SkillCard skillName={skill.name} />;
            })}
          </div>
          {otherSkills.length > 0 && (
            <h4 className="category-title">{Categories.other}</h4>
          )}
          <div className="category-skills">
            {otherSkills.map((skill) => {
              return <SkillCard skillName={skill.name} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const SkillCard = (skillName: any) => {
  return (
    <div className="skill-card">
      <p className="skill-name">{skillName.skillName}</p>
    </div>
  );
};

export default Skills;
