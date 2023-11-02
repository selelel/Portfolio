import React from "react";
import Panel from "../../Reuseable UI/Panel";
import TagIcon from "../../Reuseable UI/tagIcon";

const Projects = () => {
  const content = [
    {
      name: "Profile",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo lasd11.",
      urlGit: "https://github.com/selelel",
      urlHomepage: "https://selelel.github.io/Portfolio/",
      urlImg:
        "https://image.spreadshirtmedia.net/image-server/v1/compositions/T6A2PA5835PT17X38Y78D16932954W23559H35683/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/rick-and-morty-cromulon-show-me-what-you-got-mens-t-shirt.jpg",
      techStack: ["Html", "CSS", "Tailwind"],
    },
    {
      name: "Vertext",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo lasd11.",
      urlGit: "https://github.com/selelel",
      urlHomepage: "https://selelel.github.io/Portfolio/",
      urlImg:
        "https://image.spreadshirtmedia.net/image-server/v1/compositions/T6A2PA5835PT17X38Y78D16932954W23559H35683/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/rick-and-morty-cromulon-show-me-what-you-got-mens-t-shirt.jpg",
      techStack: ["Html", "CSS"],
    },
  ];

  return (
    <>
      <div className="mx-10 mt-16 mb-32 min-h-[30rem] flex flex-col justify-center items-center ">
        <div className="w-9/12">
          <div>
            <h1 className="text-3xl font-bold">Projects</h1>
          </div>
          {content.map((element) => {
            return (
              <Panel
                tech={element.techStack}
                linkImg={element.urlImg}
                linkGit={element.urlGit}
                link={element.urlHomepage}
                name={element.name}
                description={element.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
