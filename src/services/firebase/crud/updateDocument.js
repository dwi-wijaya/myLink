import firebase_app from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)

export async function updateDocument(collectionName, id, newData) {
    let success = false;
    let error = null;
    newData.timestamp = Date.now();
    try {
        const docRef = doc(db, collectionName, id);
        await setDoc(docRef, newData, { merge: true });
        success = true
    } catch (e) {
        console.log('p');
        error = e;
    }
    
    return { success, error };

}