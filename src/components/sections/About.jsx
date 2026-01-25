import React from "react";
import Overview from "../common/Overview";
import Parallax from "../common/Parallax";
import Skills from "./Skills";
import OtherSkills from "../common/OtherSkill";
import SoftSkills from "../common/SoftSkills";
import LanguagesKnown from "../common/LanguagesKnown";
import Links from "../common/Links";


const About = () => {
  return (
    <div id="about" className="w-screen min-h-screen bg-black ">
      <Overview />
      <Parallax />
      <Skills />
      <div className="w-[90%] min-h-fit bg-amber-500 mx-auto p-4 ">
        <SoftSkills />
        <LanguagesKnown />
        <OtherSkills />
        <Links/>
      </div>
    </div>
  );
};

export default About;
