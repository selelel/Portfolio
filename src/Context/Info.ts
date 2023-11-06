const info = {
  name: "Jan Russel Gorembalem",
  address: "Bulihan, Silang, Cavite",
  number: "0981 459 5078",
  email: "janrusselgorembalem4@gmail.com",
  objective: `Seeking a challenging position within your esteemed company to apply and further
  develop my skills and abilities. With a knowledge of front-end development, I am
  confident in my ability to contribute value and positively impact your organization's
  success.`,
  education: [
    {
      year: "2021 - 2023",
      desciption:
        "STI College Carmona Senior High School IT in Mobile App and Web Development (MAWD) Award: With Honors",
    },
    {
      year: "2017 - 2020",
      desciption:
        "Bulihan National HighSchool Junior High School ICT Award: With Honors",
    },
  ],
  skill: [
    "Has experience creating websites and programs using a specific computer programming language (including Tailwind, Typescript, and ReactJS).",

    "Has the skill to perform graphic design and video design.",

    "Has knowledge of performing administrative tasks (communication-related tasks, scheduling tasks, organizational tasks, and miscellaneous administrative tasks).",

    "Has the needed skills of problem-solving, reliability, fast learning, and persistence.",

    "Has strong interpersonal communication skills, with excellent verbal and written communicationabilities.",
  ],
  extra: [
    "TAGISAN NG TALINO AT SINING 2023 CodeFest Hackathon (Champion)",
    "Mapúa MCL ACM CodeX Competition (Entrant)",
    "ShuttersBugs (Photography and Videography)",
    ,
  ],
};
const projects = [
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
