import React from "react";
import Overview from "../common/Overview";
import Parallax from "../common/Parallax";
import Skills from "./Skills";
import { csFundamentals, softSkills,languages,otherSkills } from "../../data/data";

import SkillsCard from "../common/SkillsCard";
import Links from "../common/Links";

const About = () => {
  return (
    <div id="about" className="w-screen min-h-screen bg-black ">
      <Overview />
      <Parallax />
      <Skills />
      <div className="w-[90%] min-h-fit  mx-auto p-4 ">
        
        <SkillsCard skills={csFundamentals} sectionName={"CS FUNDAMENTALS"} />
        <SkillsCard skills={softSkills} sectionName={"Soft Skills"} />
        <SkillsCard skills={languages} sectionName={"Languages"} />
        <SkillsCard skills={otherSkills} sectionName={"Other Skills"} />
        <Links/>
      </div>
    </div>
  );
};

export default About;
