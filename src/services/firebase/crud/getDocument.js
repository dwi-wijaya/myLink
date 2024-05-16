import firebase_app from "../config";
import { getFirestore, doc, getDoc, query, collection, where, getDocs } from "firebase/firestore";
import { getFile } from "../fileHandler";

const db = getFirestore(firebase_app);

export default async function getDocument(collectionName, id, useFile = '', slug = '') {
    let result = [];
    let error = null;
    try {
        if (slug) {
            const q = query(collection(db, collectionName), where(slug, '==', id));
            const querySnapshot = await getDocs(q);

            result = querySnapshot.docs.map((doc) => doc.data())[0] ?? [];
            
            
        } else {
            const docRef = doc(db, collectionName, id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                result = { id: docSnap.id, ...docSnap.data() };
            } else {
                throw new Error("Document not found");
            }
        }
        if (useFile) {
            result[useFile] = await getFile(result[useFile])
        }
    } catch (e) {
        error = e;
    }

    return { result, error };
}
