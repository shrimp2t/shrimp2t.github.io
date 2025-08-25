import { Progress } from "@/components/ui/progress";

const list = [
  {
    title: "PHP/MySQL",
    score: 9,
  },

  {
    title: "JAVASCRIPT",
    score: 8,
  },
  {
    title: "HTML, CSS, SCSS",
    score: 8,
  },
  {
    title: "Node JS",
    score: 8,
  },
  {
    title: "React JS",
    score: 8,
  },
  {
    title: "MongoDB,Postgresql",
    score: 8,
  },
  {
    title: "Git, SVN",
    score: 8,
  },
  {
    title: "Hosting & Server",
    score: 8,
  },
  {
    title: "CSS3 Animation",
    score: 8,
  },
  {
    title: "PageSpeed Insights",
    score: 8,
  },
  {
    title: "SEO",
    score: 8,
  },
  {
    title: "English",
    score: 6,
  },
];

const Skills = () => {
  return (
    <section className="flex flex-row gap-4">
      <div className="w-4/12">
        <h2 className="text-2xl font-bold font-mono">My Skills </h2>
        <div className="text-sm">Progress bars, anyone? </div>
      </div>

      <div className="w-8/12">
        <div className="flex flex-col gap-5">
          {list.map((item, i) => {
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
