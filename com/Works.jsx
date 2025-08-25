const list = [
  {
    time: "2022 – Present",
    title: "OneMerce",
    pos: `Developer, Supporter`,
    loc: `Hanoi`,
    desc: `Build Antidetect browser and working in many other projects.`,
  },
  {
    time: "2020 – 2022",
    title: "Work From Home",
    pos: `Developer, Supporter`,
    loc: `Hanoi`,
    desc: `Working from home as a Freelancer, collaborating with several companies to develop outsourced projects and work support software.`,
  },
  {
    time: "2017 – 2020",
    title: "PressMaximum",
    pos: `Core Developer`,
    loc: `Hanoi`,
    desc: `Develop themes and plugins, tools as Core Developer cum project leader with multi-user projects.`,
  },
  {
    time: "2014 – 2017",
    title: "FameThemes",
    pos: `Core Developer`,
    loc: `Hanoi`,
    desc: `Develop themes and plugins, tools as Core Developer cum project leader with multi-user projects.`,
  },
  {
    time: "2012 – 2014",
    title: "Freelancer",
    pos: `Full Stack Web developer`,
    loc: `Thái Nguyên`,
    desc: `Implemented many projects as a Freelancer with many domestic and foreign client projects. With projects on PHP, WordPress, customizer tasks.`,
  },
];

const Works = () => {
  return (
    <section className="flex flex-col gap-4 md:flex-row px-3 relative">
      <div className="w-full md:w-4/12">
        <h2 className="text-2xl font-bold font-mono">Experience</h2>
        <div className="text-sm">Yes. I've been around.</div>
      </div>
      <div className="w-full md:w-8/12">
        <div className="flex flex-col gap-16 timeline">
          {list.map((item, i) => {
            return (
              <div
                className={`timeline-item pl-5 flex flex-col gap-2 ${
                  i === 0 ? "halo" : ""
                }`}
                key={i}
              >
                <div>{item.time}</div>
                <div>{item.title}</div>
                <div>{item.pos}</div>
                <div>{item.loc}</div>
                <div>{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
