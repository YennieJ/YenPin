import { storage } from "service/firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
  getStorage,
} from "firebase/storage";

export const UploadImageFile = (
  e: React.ChangeEvent<EventTarget & HTMLInputElement>,
  setFile: React.Dispatch<React.SetStateAction<string>>,
  setId: React.Dispatch<React.SetStateAction<number | undefined>>
) => {
  const file = e.target.files;
  if (!file) return null;

  const name = new Date().getTime();
  setId(name);

  const storageRef = ref(storage, "images/" + name);

  const uploadTask = uploadBytesResumable(storageRef, file[0]);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setFile(downloadURL);
      });
    }
  );
};

export const DeleteImageFile = (id: number) => {
  const storage = getStorage();

  // Create a reference to the file to delete
  const desertRef = ref(storage, "images/" + id);

  // Delete the file
  deleteObject(desertRef)
    .then(() => {
      // File deleted successfully
    })
    .catch((error) => {
      console.log(error);
    });
};
