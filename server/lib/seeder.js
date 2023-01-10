

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
seed()

