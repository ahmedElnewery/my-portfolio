
import {db} from './../../lib/firebase'
import { collection,getDocs } from "firebase/firestore"; 
export default defineEventHandler(async (event) => {
    const skillsCol =  collection(db,"skills")
    const skillsSnap = await getDocs(skillsCol)
    const skillsData = []
    skillsSnap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        skillsData.push(doc.data().value);
      });
return skillsData
})