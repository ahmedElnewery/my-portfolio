

const firebaseConfig = {
  apiKey: "AIzaSyD2WD077PQ0YhlhmX_xsLGA-ZyzWmP6Xek",
  authDomain: "my-portfolio-b2266.firebaseapp.com",
  projectId: "my-portfolio-b2266",
  storageBucket: "my-portfolio-b2266.appspot.com",
  messagingSenderId: "813301442811",
  appId: "1:813301442811:web:07f338b632c33c24c0685e",
  measurementId: "G-B7JG166G7Q"
};



const  { initializeApp } = require ("firebase/app")
const  { getFirestore } =require("firebase/firestore")
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const { addDoc,collection } = require("firebase/firestore")

const experiences = [
    {
        id: "1",
        company: "Boostiny", title: "Frontend Engineer", startDate: new Date("06/19/2022"), endDate: null,
        achievements: ["Build system for backoffice and users that help business to achieve",
            "using Vue js building partials"]
    },
    {
        id: "2",
        company: "StarryAI", title: "Frontend developer", startDate: new Date("03/03/2022"), endDate: new Date("06/05/2022"),
        achievements: [" Design AI art generator web app that allow user to create a piece of NFT art",
            " using React , Apollo Clint,"]
    },
    {
        id: "3",
        company: "BeClarified", title: "Frontend developer", startDate: new Date("11/07/2021"), endDate: new Date("06/05/2022"),
        achievements: [" Design a dental practice management software that provide confirm appointment , lab management, finical invoices, stock management.",
            " using React, Redux , React-table, React hook form"]
    },
    {
        id: "4",
        company: "Digitopia", title: "Frontend developer", startDate: new Date("04/07/2021"), endDate: new Date("11/01/2021"),
        achievements: ["Developing and maintaining a variety of responsive web pages using React.",
            "Integrating with Graphql queries",
            "Using a variety of UI technologies e.g. React-leaflet, React hook form,Apollo Clint, etc..."]
    },
]
const projects = [

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
 const skills = [
    "Javascript (Es6 and beyond)",
    "React",
    "Vue",
     "State management (Redux, Vuex)",
    "Server Side Rendering (Next , Nuxt)",
    "Unit Testing (Jest)"
]
 function seed() {
    try {
        experiences.forEach((experience) => {

            addDoc(collection(db, "experiences"), {
                company: experience.company,
                title: experience.title,
                startDate: experience.startDate,
                endDate: experience.endDate,
                achievements: experience.achievements,
            })

        })
        console.log("seeding successfully")
    } catch (error) {
        console.log("err in seeding ")

    }

}
function seedProjects(){
        try {
        projects.forEach((project) => {

            addDoc(collection(db, "projects"), {
                title:project.title,
                desc: project.desc,
                githubUrl: project.githubUrl,
                url: project.url,
                tags:project.tags
            })

        })
        console.log("seeding successfully")
    } catch (error) {
        console.log("err in seeding ")

    }
}
function seedSkills(){
        try {
        skills.forEach((skill) => {

            addDoc(collection(db, "skills"), {
                value:skill
            })

        })
        console.log("seeding successfully")
    } catch (error) {
        console.log(error)
        console.log("err in seeding ")

    }
}
// seed()
// seedProjects()
seedSkills()
