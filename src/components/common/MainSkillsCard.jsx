import React from 'react'

const MainSkillsCard = ({skills,sectionName}) => {
  return (
    <div className="skill-box w-[90%]  xl:w-[25%] border-2 rounded-xl p-4">
    <h3 className="text-3xl  text-white  mb-3">{sectionName}</h3>
    <div className="flex flex-col gap-4">
      {skills.map((ele, id) => (
        <div key={id} className="flex gap-3 items-center">
          <img
            className="w-10"
            src={`/assets/svgs/${ele.type === "hasLogo" ? ele.name : "NOT"}.svg`}
            alt={ele.name}
          />
          <p className="text-2xl text-white">{ele.name}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default MainSkillsCard