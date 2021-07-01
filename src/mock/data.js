import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kanav | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Kanav Jain',
  subtitle: "I'm the UNKNOWN Developer",
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne: "I'm currently pursuing BE from NSIT, Delhi in Computer Engineering",
  paragraphTwo:
    "I'm a huge CRICKET fanatic and a FOOTBALL fan as well. Coding is the skill I have developed over time and now it has become infectious. Below are some of my projects which I have created over time using different technologies like HTML, CSS, JavaScript, React.js, Node.js, Express.js, PostgreSQL and many more....",
  paragraphThree: 'Hope you guys like it!',
  resume: 'https://drive.google.com/file/d/1wEf37yUQUIhSS_b8l3464vqTK8dhYVri/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Smart-Brain',
    info: 'Smart-Brain is a fully responsive web-app that registers the user and signs them in if their email and password are correct. It lets you detect the face in an image provided by the user even if there are multiple. Paste any link from the web and smart-brain will recognise the face in it.',
    info2:
      'Technologies used in this web app are React.js, Node.js, Express.js, PostgreSQL and Clarifai API',
    url: 'https://smart-brain-kanav.herokuapp.com',
    repo: 'https://github.com/Kanav21/smart-brain', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Robo-Friends',
    info: 'Robo-Friends is a fully responsive web-app that lets you search through the robot list and fetches you the details of the desired robot.',
    info2: 'This app is entirely built on React.js',
    url: 'https://kanav21.github.io/robofriends',
    repo: 'https://github.com/Kanav21/robofriends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Background Generator',
    info: 'Background Generator helps you in getting the hex-code for your background gradient with live demo.',
    info2: 'Technologies used are HTML, CSS and JavaScript',
    url: 'https://kanav21.github.io/background-generator',
    repo: 'https://github.com/Kanav21/background-generator', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'kanavjain21@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/AncientOne21',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kanav-j-7b50a5100',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Kanav21',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
