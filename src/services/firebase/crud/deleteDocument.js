import firebase_app from "../config";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)

export async function deleteDocument(collectionName, id) {
    let result = [];
    let error = null;

    try {
        const docRef = doc(db, collectionName, id);
        await deleteDoc(docRef);
        result = true;
    } catch (e) {
        error = e;
    }
    return { result, error };
}