// import seed from '../config/seeder'
import Message from './../components/icons/Message.vue'
import BriefCase from './../components/icons/BriefCase.vue'
import Code from './../components/icons/Code.vue'
import Send from './../components/icons/Send.vue'
import Home from './../components/icons/Home.vue'
// seed()

export const experiences = [
  {
      id: "1",
      company: "Boostiny", title: "Frontend Engineer", startDate: "06/19/2022", endDate: null,
      achievements: ["Build system for backoffice and users that help business to achieve",
          "using Vue js building partials"]
  },
  {
      id: "2",
      company: "StarryAI", title: "Frontend developer", startDate: "03/03/2022", endDate: "06/05/2022",
      achievements: [" Design AI art generator web app that allow user to create a piece of NFT art",
          " using React , Apollo Clint,"]
  },
  {
      id: "3",
      company: "BeClarified", title: "Frontend developer", startDate: "11/07/2021", endDate: "06/05/2022",
      achievements: [" Design a dental practice management software that provide confirm appointment , lab management, finical invoices, stock management.",
          " using React, Redux , React-table, React hook form"]
  },
  {
      id: "4",
      company: "Digitopia", title: "Frontend developer", startDate: "04/07/2022", endDate: "11/01/2021",
      achievements: ["Developing and maintaining a variety of responsive web pages using React.",
          "Integrating with Graphql queries",
          "Using a variety of UI technologies e.g. React-leaflet, React hook form,Apollo Clint, etc..."]
  },
]
export const navbar = [
    { label: "Home", path: "/",icon:Home },
    { label: "About", path: "/about",icon:Message },
    { label: "Experience", path: "/experience",icon:BriefCase },
    { label: "projects", path: "/projects",icon:Code },
    { label: "Contact", path: "/contact",icon:Send },
]

export const projects = [

    {
        id: "1",
        title: "Trello Clone",
        desc: "Trello is a collaboration tool that organizes your projects into boards. In one glance, Trello tells you what's being worked on,   who's working on what, and where something is in a process.",
        githubUrl: "https://github.com/ahmedElnewery/trello-clone/",
        url: "https://mario130.github.io/trello-clone/welcome-page/welcome.html",
        tags: ["Jquery", "Boostrap", "DnD"]
    },
    {
        id: "2",
        title: "Buger builder",
        desc: "Design and develop app that users can choose their favorite burger and order it. ",
        githubUrl: "https://github.com/ahmedElnewery/buger-builder",
        url: "https://ahmedelnewery.github.io/",
        tags: ["React", "Redux", "Firebase"]
    },
    {
        id: "3",
        title: "Social media app",
        desc: "Interact with your friends",
        githubUrl: "https://github.com/ahmedElnewery/social-media-app",
        url: "",
        tags: ["React", "socket io"]
    },
    {
        id: "4",
        title: "Upwork",
        desc: "Connect clients with freelancers ",
        githubUrl: "https://github.com/ahmedElnewery/upwork-clone",
        url: "https://upwork-4.web.app",
        tags: ["React", "Node js","Mongodb"]
    },
]


export const skills = [
    "Javascript (Es6 and beyond)",
    "React",
    "Vue",
     "State management (Redux, Vuex)",
    "Server Side Rendering (Next , Nuxt)",
    "Unit Testing (Jest)"
]
export const options = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3,
        },
        repulse: {
          distance: 400,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };