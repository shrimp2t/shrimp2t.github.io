import { Progress } from "@/components/ui/progress";
import { type } from "os";
import { title } from "process";

const list = [
  {
    title: "Back-end",
    type: "heading",
  },
  {
    title: "PHP/MySQL/WordPress",
    score: 9,
  },
  {
    title: "NodeJs/ExpressJS/NextJs",
    score: 8,
  },
  {
    title: "MongoDB",
    score: 8,
  },

  {
    title: "Front-end",
    type: "heading",
  },

  {
    title: "JavaScript",
    score: 9,
  },
  {
    title: "HTML5, CSS, SCSS",
    score: 8,
  },
  {
    title: "React & Libraries: heroui, shadcn ant-design, chakraui,...",
    score: 9,
  },
  {
    title: "PageSpeed Insights",
    score: 8,
  },
  {
    title: "Tools & DevOps",
    type: "heading",
  },

  {
    title: "Git, SVN",
    score: 8,
  },
  {
    title: "Hosting & Linux Server",
    score: 8,
  },

  {
    title: "SEO",
    score: 8,
  },
  {
    title: "CI/CD basics",
    score: 7,
  },
  {
    title: "Others",
    type: "heading",
  },
  {
    title: "Crawler System",
    score: 8,
  },
  {
    title: "Browser Fingerprint",
    score: 8,
  },
  {
    title: "Chrome Extension",
    score: 8,
  },
  {
    title: "E-Commerce",
    score: 8,
  },
  {
    title: "English",
    score: 6,
  },
];

const Skills = () => {
  return (
    <section className="flex flex-col gap-4 md:flex-row px-3">
      <div className="w-full md:w-4/12">
        <h2 className="text-2xl font-bold font-mono">My Skills </h2>
        <div className="text-sm">Progress bars, anyone? </div>
      </div>

      <div className="w-full md:w-8/12">
        <div className="flex flex-col gap-3">
          {list.map((item, i) => {
            if (item.type === "heading") {
              return (
                <div key={i} className="not-first:mt-5">
                  <h3 className="text-lg font-bold font-mono">{item.title}</h3>
                </div>
              );
            }

            return (
              <div key={i}>
                <div className=" text-lg flex gap-5 items-center">
                  <div className="font-bold text-yellow-500">
                    {item.score}
                    <span className="text-sm font-normal">/10</span>
                  </div>
                  <div>{item.title}</div>
                </div>
                <Progress value={item.score * 10} className="h-3" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
