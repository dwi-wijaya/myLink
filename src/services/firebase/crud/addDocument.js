import { v4 } from "uuid";
import firebase_app from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)

export default async function addDocument(colllection, data) {
    let success = false;
    let error = null;
    data.timestamp = Date.now();

    try {
        await setDoc(doc(db, colllection, v4()), data, {
            merge: true,
        });
        success = true;
    } catch (e) {
        error = e;
    }

    return { success, error };
}