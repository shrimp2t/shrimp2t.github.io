const list = [
  {
    time: "2008 – 2013",
    title: `ITCU`,
    desc: `Công nghệ phần mềm.`,
    loc: `Thái Nguyên`,
    desc: `Studying and researching at Thai Nguyen University of Information and Communication Technology. Started working at some small software companies in Thai Nguyen.`,
  },
];

const Education = () => {
  return (
    <section className="flex flex-col gap-4 md:flex-row px-3">
      <div className="w-full md:w-4/12">
        <h2 className="text-2xl font-bold font-mono">Education</h2>
        <div className="text-sm"></div>
      </div>

      <div className="w-full md:w-8/12">
        <div className="flex flex-col gap-5">
          {list.map((item, i) => {
            return (
              <div className="flex flex-col gap-2" key={i}>
                <div>{item.time}</div>
                <div>{item.title}</div>
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

export default Education;
