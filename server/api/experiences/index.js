
import {db} from './../../lib/firebase'
import { collection,getDocs,query,orderBy } from "firebase/firestore"; 
export default defineEventHandler(async (event) => {
    const experiencesCol =  collection(db,"experiences")
    const q =  query(experiencesCol,orderBy("startDate","desc"))
    const experiencesSnap = await getDocs(q)
    const experiencesData = []
    experiencesSnap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        experiencesData.push({id:doc.id,
        ...doc.data(),
        startDate:new Date(doc.data().startDate.seconds * 1000),
        endDate:doc.data().endDate ? new Date(doc.data().endDate.seconds * 1000): null,
        });
      });
return experiencesData
})