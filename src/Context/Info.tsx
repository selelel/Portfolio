const info = {
  name: "Jan Russel Gorembalem",
  address: "Bulihan, Silang, Cavite",
  number: "0981 459 5078",
  email: "janrusselgorembalem4@gmail.com",
  about: `Enthusiastic and dedicated front-end web developer seeking
  opportunities to grow and learn within the ever-evolving field of web
  development. Driven by a passion for design and a commitment to
  crafting user-friendly websites, I'm eager to refine my skills and tackle
  new challenges in this exciting domain.
  `,
  objective: `Eagerly seeking a challenging front-end development position at your
  esteemed company to leverage my skills and expertise. With a
  foundation in front-end technologies, I am confident in my ability to
  make significant contributions to your organization's growth and
  success.
  `,
  education: [
    {
      year: "2021 - 2023",
      desciption: () => {
        return (
          <div>
            <h1 className="font-bold">
              STI College Carmona Senior High School
            </h1>
            IT in Mobile App and Web Development (MAWD){" "}
            <p className="italic mt-1">
              Award: Notable achievements Mobile App Development.
            </p>
          </div>
        );
      },
    },
    {
      year: "2017 - 2020",
      desciption: () => {
        return (
          <div>
            <h1 className="font-bold">
              Bulihan Integrated National High School
            </h1>
            Information and Communication Technology{" "}
            <p className="italic mt-1">Awards: With Honors</p>
          </div>
        );
      },
    },
  ],
  skill: [
    "Languages: JavaScript/TypeScript, C#, Java",
    "Frontend: React, TailwindCSS",
    "Tools: Discord, Git, GitHub/GitLab",
  ],
  extra: [
    "TAGISAN NG TALINO AT SINING 2023 CodeFest Hackathon (Champion)",
    "Mapúa MCL ACM CodeX Competition (Entrant)",
  ],
};

const projects = [
  {
    name: "Pawn Reciept",
    description:
      "Pawn Reciept: Elevate your Chess.com stats with stylish receipts for a visually pleasing showcase of chess prowess.",
    urlGit: "https://github.com/selelel/pawn-peek",
    urlHomepage: "https://selelel.github.io/pawn-reciept",
    urlImg: require("./img/soon.gif"),
    techStack: ["Tailwind", "ReactJS", "TypeScript"],
  },
  {
    name: "Portfolio Website",
    description:
      "Discover my portfolio – a visual journey through my creative work and skills. Explore and connect today!",
    urlGit: "https://github.com/selelel/portfolio",
    urlHomepage: "https://selelel.github.io/portfolio/",
    urlImg: require("./img/portfolio.gif"),
    techStack: ["Tailwind", "ReactJS", "TypeScript"],
  },
  {
    name: "Vertext",
    description:
      "VerText is the go-to website for quick and easy text transformations. Convert text to uppercase, lowercase, or Morse code in seconds, and express yourself with flair.",
    urlGit: "https://github.com/selelel/vertext",
    urlHomepage:
      "https://selelel.github.io/vertext/?fbclid=IwAR2C3kuhUs6n2lm6GiMPt3-N3EwGzVw7s_UX7iGF7kff2JHC4fb_F2KNMew",
    urlImg: require("./img/vertext.gif"),
    techStack: ["Tailwind", "ReactJS"],
  },
];

export { projects, info };
