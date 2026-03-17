import React from "react";

const Experience = ({ experiences }) => {
  return (
    <div className="flex flex-col gap-6 p-4 items-center mb-4">
      {experiences.map((exp, id) => (
        <div
          key={id}
          className="w-full lg:w-[70%] rounded-lg border-2 border-white/30 p-6 text-white space-y-4 transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <div className="flex items-center gap-4">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-12 h-12 rounded-lg object-contain"
              />
              <div>
                <h3 className="font-bold text-2xl">{exp.role}</h3>
                <p className="text-neutral-400 text-sm">{exp.company}</p>
              </div>
            </div>
            <span className="text-sm bg-neutral-700 px-3 py-1 rounded-full self-start sm:self-auto">
              {exp.year}
            </span>
          </div>

          <div className="border-t border-white/20" />

          <ul className="space-y-2">
            {exp.points.map((point, i) => (
              <li
                key={i}
                className="flex gap-3 items-start text-sm text-neutral-300 leading-relaxed"
              >
                <span className="mt-1.5 w-2 h-2 rounded-full bg-white shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;