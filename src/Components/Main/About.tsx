import TagIcon from "../../Reuseable UI/tagIcon";

const About = () => {
  return (
    <>
      <div className="mx-auto my-auto min-h-[30rem] flex flex-col items-center ">
        <Skill />
        <div className="w-9/12 mt-24 flex md:flex-nowrap flex-wrap items-center gap-0 px-auto">
          <p className="min-w-fit pr-1 py-2 text-3xl font-semibold">About me</p>
          <div className="ml-0 pl-0 md:py-6 border-black md:border-l-2 md:ml-3 md:pl-10 w-full">
            <p className="text-2xl font-semibold mb-5">I love Learning!</p>
            <p>
              I'm Jan Russel, an entry-level front-end web developer eager to
              learn and grow in the world of web development. I have a deep
              appreciation for design and aspire to create user-friendly
              websites. I'm enthusiastic about honing my skills and taking on
              new challenges in this exciting field. Let's embark on this
              learning journey together! 🚀😊🌟
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Skill = () => {
  const Icons = [
    "HTML",
    "CSS",
    "JavaScript",
    "Typescript",
    "Tailwind",
    "Git",
    "ReactJS",
    "JQuery",
    "UX/UI Design",
    "NPM",
    "Node",
    "SQL",
    "Andriod Studio",
  ].map((Element) => {
    return <TagIcon>{Element}</TagIcon>;
  });
  return (
    <>
      <div className="gap-1 mx-auto w-9/12">
        <div className=" mx-auto mb-2">
          <p className="w-fit font-semibold text-3xl">Skills</p>
        </div>

        <div className="flex flex-wrap w-11/12 gap-1 align-middle mx-auto justify-stretch ">
          {Icons}
        </div>
      </div>
    </>
  );
};

export default About;
