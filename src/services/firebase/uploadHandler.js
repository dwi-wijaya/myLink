import { storage } from "./config";
const {  ref, uploadBytes } = require("firebase/storage");
const { v1 } = require("uuid");
const db = getFirestore(firebase_app)

export async function uploadHandler(dir, file) {
    let success = false;
    let error = null;
    let url = null;
    try {
        const filePath = 'skill/app.text'; 
        console.log(file.name);
        const newFileRef = ref(storage, filePath);
        await uploadBytes(newFileRef, file).then((data) => {
            getDownloadURL(data.ref)
        }); // Gunakan parameter file yang benar
        // await uploadBytesResumable(newFileRef, file); // Gunakan parameter file yang benar
        
        // url = await getDownloadURL(newFileRef); // Dapatkan URL unduhan
        
        success = true;
    } catch (e) {
        console.log(e);
        success = false;
        error = e.message;
    }
    return { success, error, url };
}
