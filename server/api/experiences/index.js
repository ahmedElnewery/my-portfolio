
import {db} from './../../lib/firebase'
import { collection,getDocs } from "firebase/firestore"; 
export default defineEventHandler(async (event) => {
    const experiencesCol =  collection(db,"experiences")
    const experiencesSnap = await getDocs(experiencesCol)
    const experiencesData = []
    experiencesSnap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        experiencesData.push({id:doc.id,
        ...doc.data(),
        startDate:doc.data().startDate.toDate(),
        endDate:doc.data().endDate ? doc.data().endDate.toDate(): null,
        });
      });
return experiencesData
})