import { storage } from "service/firebase";
import {
  ref,
  uploadBytesResumable,
  deleteObject,
  getStorage,
} from "firebase/storage";

// export const UploadImageFile = function (file: FileList | null) {
//   return new Promise(function (resolve, reject) {
//     const name = new Date().getTime();

//     const metadata = {
//       contentType: "image/jpeg",
//     };
//     const storageRef = ref(storage, "images/" + name);

//     try {
//       const uploadTask = uploadBytesResumable(storageRef, file![0], metadata);

//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           const progress =
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

//           console.log("Upload is " + progress + "% done");

//           switch (snapshot.state) {
//             case "paused":
//               console.log("Upload is paused");
//               break;
//             case "running":
//               console.log("Upload is running");
//               break;
//           }
//         },
//         (error) => {
//           console.log(error);
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             console.log("File available at", downloadURL);
//             resolve({ imgUrl: downloadURL });
//           });
//         }
//       );
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// Create a reference under which you want to list

export const UploadImageFile = (
  file: any,
  id: any
  // file: FileList | null,
  // setFile: React.Dispatch<React.SetStateAction<string>>,
  // setId: React.Dispatch<React.SetStateAction<number | undefined>>
) => {
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

export const DeleteImageFile = (id: number) => {
  const storage = getStorage();

  const desertRef = ref(storage, "images/" + id);

  // Delete the file
  deleteObject(desertRef)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};
