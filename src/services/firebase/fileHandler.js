import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "./config";

export const uploadFile = async (file, folder) => {
    try {
        const filename = v4();
        const storageRef = ref(
            storage,
            `${folder}${filename}.${file.name.split(".").pop()}`
        );
        const res = await uploadBytes(storageRef, file);

        return res.metadata.fullPath;
    } catch (error) {
        throw error;
    }
};

export const getFile = async (path) => {
    try {
        const fileRef = ref(storage, path);
        return getDownloadURL(fileRef);
    } catch (error) {
        throw error;
    }
};

export const deleteFile = async (path) => {
    try {
        const fileRef = ref(storage, path);
        await deleteObject(fileRef);
        return true; // Jika penghapusan berhasil
    } catch (error) {
        throw error;
    }
};
