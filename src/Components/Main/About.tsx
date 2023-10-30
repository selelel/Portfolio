import TagIcon from "../../Reuseable UI/tagIcon";

const Skill = () => {
  return (
    <>
      <div className="gap-1 mx-auto w-11/12">
        <div className="w-7/12 mx-auto mb-2">
          <p className="w-fit font-semibold text-3xl">Skills</p>
        </div>

        <div className="flex flex-wrap w-7/12 gap-1 align-middle mx-auto justify-start">
          <TagIcon>HTML</TagIcon>
          <TagIcon>CSS</TagIcon>
          <TagIcon>JavaScript</TagIcon>
          <TagIcon>Tailwind</TagIcon>
          <TagIcon>ReactJS</TagIcon>
          <TagIcon>Node</TagIcon>
          <TagIcon>APIs</TagIcon>
          <TagIcon>C#</TagIcon>
          <TagIcon>JAVA</TagIcon>
          <TagIcon>Typescript</TagIcon>
          <TagIcon>Jquery</TagIcon>
          <TagIcon>NPM</TagIcon>
          <TagIcon>UX/UI Design</TagIcon>
        </div>
      </div>
    </>
  );
};

const About = () => {
  return (
    <>
      <div className="mx-10 min-h-[30rem] flex flex-col items-center ">
        <Skill />
        <div className="w-11/12 mt-24 flex lg:flex-nowrap flexFix forAboutme items-center gap-0 px-10">
          <p className="min-w-fit pr-5 py-2 text-3xl font-semibold">About me</p>
          <div className="ml-3 pl-10 py-6 border-l-2 border-black">
            <p className="text-2xl font-semibold mb-5">Mamaw magrelapse</p>
            <p>
              Hello, I'm Jan Russel, a passionate junior front-end web developer
              with a keen eye for design and a love for creating beautiful,
              user-friendly websites. I'm dedicated to crafting exceptional
              digital experiences that not only look great but also function
              flawlessly. 🚀
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
