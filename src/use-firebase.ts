import {
  FirebaseStorage,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

export const useFirebase = () => {
  const uploadPicture = async (fileObj: File, storage: FirebaseStorage) => {
    if (fileObj) {
      const storageRef = ref(storage, `pictures/${uuidv4()}`);

      await uploadBytes(storageRef, fileObj);

      return await getDownloadURL(storageRef);
    }
    throw console.error("error", "you must select a file to upload");
  };
  const uploadFile = async (fileObj: File, storage: FirebaseStorage) => {
    if (fileObj) {
      const storageRef = ref(storage, `${fileObj.name}`);

      await uploadBytes(storageRef, fileObj);

      return await getDownloadURL(storageRef);
    }
    throw console.error("error", "you must select a file to upload");
  };

  return {
    uploadPicture,
    uploadFile,
  };
};
