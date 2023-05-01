import {
  FirebaseStorage,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
/**
 * useFirebase: hook to upload pictures and files to firebase.
 * @param fileObj: the file or the image you want to upload to firebase {File}
 * @param storage: firebase storage instance { FirebaseStorage }
 * @returns uploadPicture: function to upload a picture @type (fileObj: File, storage: FirebaseStorage) => Promise<string>
 * @returns uploadFile: function to upload a file @type (fileObj: File, storage: FirebaseStorage) => Promise<string>
 * @note each of this two functions will return a link to the file on firebase storage
 */
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
