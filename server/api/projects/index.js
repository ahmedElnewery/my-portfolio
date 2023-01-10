
import {db} from './../../lib/firebase'
import { collection,getDocs,query,orderBy } from "firebase/firestore"; 
export default defineEventHandler(async (event) => {
    const projectsCol =  collection(db,"projects")
    const projectsSnap = await getDocs(projectsCol)
    const projectsData = []
    projectsSnap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        projectsData.push({id:doc.id,
        ...doc.data(),
        });
      });
return projectsData
})