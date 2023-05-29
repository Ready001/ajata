import React, { useEffect, useState } from "react";

import { skillsFull, skillEntry, Categories } from "./SkillsList";
import "./Skills.css";

function Skills() {
  //states
  const [skills, setSkills] = useState(skillsFull);

  const [langSkills, setLangSkills] = useState(
    skillsFull.filter((skill) => skill.category === Categories.languages)
  );

  const [cloudSkills, setCloudSkills] = useState(
    skillsFull.filter((skill) => skill.category === Categories.cloud)
  );

  const [dbSkills, setDbSkills] = useState(
    skillsFull.filter((skill) => skill.category === Categories.db)
  );

  const [libSkills, setLibSkills] = useState(
    skillsFull.filter((skill) => skill.category === Categories.lib)
  );

  const [otherSkills, setOtherSkills] = useState(
    skillsFull.filter((skill) => skill.category === Categories.other)
  );

  //update per category states when state for all skills updates
  useEffect(() => {
    setLangSkills(
      skills.filter((skill) => skill.category === Categories.languages)
    );
    setCloudSkills(
      skills.filter((skill) => skill.category === Categories.cloud)
    );
    setDbSkills(skills.filter((skill) => skill.category === Categories.db));
    setLibSkills(skills.filter((skill) => skill.category === Categories.lib));
    setOtherSkills(
      skills.filter((skill) => skill.category === Categories.other)
    );
  }, [skills]);

  //called when input in the search bar changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    filterSkills(e.target.value.toLowerCase());
  };

  //filters skills while considering both the skill's name and also related words
  const filterSkills = (searchInput: string) => {
    const filteredSkills = skillsFull.filter((skill) => {
      const skillNameLower = skill.name.toLowerCase();
      const searchInputLower = searchInput.toLowerCase();
      const isMatch =
        skillNameLower.includes(searchInputLower) ||
        skill.related.some((x) => x.toLowerCase().includes(searchInputLower));
      return isMatch;
    });

    setSkills(filteredSkills);
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
          {renderSkillsSection(langSkills, Categories.languages)}
          {renderSkillsSection(cloudSkills, Categories.cloud)}
          {renderSkillsSection(dbSkills, Categories.db)}
          {renderSkillsSection(libSkills, Categories.lib)}
          {renderSkillsSection(otherSkills, Categories.other)}
        </div>
      </div>
    </div>
  );
}

//renders individual skill
const SkillCard = (skillObj: any) => {
  return (
    <div className="skill-card">
      <p className="skill-name">{skillObj.skillName}</p>
    </div>
  );
};

//renders an entire skill section
const renderSkillsSection = (
  categorySkills: Array<skillEntry>,
  categoryTitle: string
) => {
  return (
    <>
      {categorySkills.length > 0 && (
        <h4 className="category-title">{categoryTitle}</h4>
      )}
      <div className="category-skills">
        {categorySkills.map((skill) => (
          <SkillCard skillName={skill.name} key={skill.name} />
        ))}
      </div>
    </>
  );
};

export default Skills;
