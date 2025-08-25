import { m } from "framer-motion";
import { title } from "process";

const list = [
  {
    title: "JavaScript/ Node /React/ JS Frameworks",
    desc: `Proficient in JS and JS libraries such as jQuery, ReactJS, NodeJS... Able to learn new JS framework quickly.`,
  },
  {
    title: `UX Design`,
    desc: `Understand and design user experiences so that the application has the best and most convenient experience.`,
  },
  {
    title: `System Analysis and Design`,
    desc: `Ability to analyze and design systems based on customer requirements so that it is most suitable and convenient for the development and expansion of the software.`,
  },

  {
    title: `E-Commerce`,
    desc: `Experience in working and implementing E-Commerce systems that sell physical products and digital products by subscription.`,
  },
  {
    title: `PHP/MySQL / WordPress`,
    desc: `Has many years of experience developing themes and plugins for WordPress. Can code, modify, add new functions for themes/plugins as required.`,
  },
  {
    title: `Advanced CSS/SCSS`,
    desc: `Proficient in CSS/SASS can make perfect pixels interface as in photoshop or frigma designs,..`,
  },
];

const Experience = () => {
  return (
    <section className="flex flex-col gap-4 md:flex-row px-3">
      <div className="w-full md:w-4/12">
        <h2 className="text-2xl font-bold font-mono">Expertise</h2>
        <div className="text-sm">
          Core strengths and specialized skills that drive impactful solutions.
        </div>
      </div>

      <div className="w-full md:w-8/12">
        <div className="flex flex-col gap-5">
          {list.map((item, i) => {
            return (
              <div key={i}>
                <div className="font-bold">{item.title}</div>
                <div className="italic text-gray-600">{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
