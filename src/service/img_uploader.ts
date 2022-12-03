import { storage } from "service/firebase";
import {
  ref,
  uploadBytesResumable,
  deleteObject,
  getStorage,
} from "firebase/storage";

export const FbUploadImageFile = (file: File, id: number) => {
  const storageRef = ref(storage, "images/" + id);

  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = snapshot.bytesTransferred / snapshot.totalBytes;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      console.log(error);
    }
  );
};

export const FbDeleteImageFile = (id: number) => {
  const storage = getStorage();

  const desertRef = ref(storage, "images/" + id);

  // Delete the file
  deleteObject(desertRef)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};
