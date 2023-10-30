import TagIcon from "../../Reuseable UI/tagIcon";

const Skill = () => {
  return (
    <>
      <div className="gap-1 mx-auto">
        <div className="w-7/12 mx-auto mb-2">
          <p className="w-fit font-semibold  text-3xl">Skills</p>
        </div>

        <div className="flex flex-wrap w-7/12 gap-1 mx-auto justify-start">
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
      <div className="mx-10 min-h-[30rem] flex flex-col">
        <Skill />
      </div>
    </>
  );
};

export default About;
