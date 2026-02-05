// =======================
// Skills Section Logos
// =======================
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// =======================
// Education Section Logos
// =======================
import iftmLogo from "./assets/education_logo/iftm.png";
import ssnLogo from "./assets/education_logo/SSN.png";

// =======================
// Project Section Logos
// =======================
import weatherLogo from "./assets/work_logo/weather.png";
import todoLogo from "./assets/work_logo/todo.png";
import landingLogo from "./assets/work_logo/landing_Page.png";

// =======================
// Skills Data
// =======================
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

// =======================
// Education Data
// =======================
export const education = [
  {
    id: 0,
    img: iftmLogo,
    school: "IFTM University, Moradabad",
    date: "2023 – 2026",
    grade: "—",
    degree: "Bachelor of Computer Applications (BCA) – Computer Science",
    desc: "I am currently pursuing my Bachelor’s degree in Computer Applications (BCA) from IFTM University, Moradabad. During my studies, I am building a strong foundation in core subjects such as Data Structures, Database Management Systems, and Web Development, while actively working on academic and personal projects to gain hands-on experience.",
  },
  {
    id: 1,
    img: ssnLogo,
    school: "SSN Inter College, Amroha",
    date: "2022 – 2023",
    grade: "71%",
    desc: "Completed Class 12 under the U.P. Board with a Science stream, focusing on Mathematics, Physics, and Chemistry.",
  },
  {
    id: 2,
    img: ssnLogo,
    school: "SSN Inter College, Amroha",
    date: "2020 – 2021",
    grade: "86.5%",
    desc: "Completed Class 10 under the U.P. Board with core subjects including Science and Mathematics.",
  },
];

// =======================
// Projects Data
// =======================
export const projects = [
  {
    id: 0,
    title: "Weather Application",
    description:
      "A responsive weather application that allows users to search for any city and view real-time weather details such as temperature, humidity, wind speed, and conditions using a public weather API.",
    image: weatherLogo,
    tags: ["HTML", "CSS", "JavaScript", "React", "API"],
    github: "https://github.com/Dheerajchauhan588/Weather-application",
    webapp: "https://weather-application-phi-woad.vercel.app/",
  },
  {
    id: 1,
    title: "To-Do List Application",
    description:
      "A simple and user-friendly to-do list app that helps users manage daily tasks by adding, updating, completing, and deleting tasks to improve productivity.",
    image: todoLogo,
    tags: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/Dheerajchauhan588/To_Do_list_App",
    webapp: "",
  },
  {
    id: 2,
    title: "Landing Page",
    description:
      "A clean and responsive landing page built using HTML and CSS, focusing on modern UI design and layout structure.",
    image: landingLogo,
    tags: ["HTML", "CSS"],
    github: "https://github.com/Dheerajchauhan588/Landing_Page",
    webapp: "",
  },
];
