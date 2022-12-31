// import { storage } from "service/firebase";
// import {
//   ref,
//   uploadBytesResumable,
//   deleteObject,
//   getStorage,
// } from "firebase/storage";

// export const FbUploadImageFile = (file: File, id: number) => {
//   const storageRef = ref(storage, "images/" + id);

//   const uploadTask = uploadBytesResumable(storageRef, file);
//   uploadTask.on(
//     "state_changed",
//     (snapshot) => {
//       const progress = snapshot.bytesTransferred / snapshot.totalBytes;
//       console.log("Upload is " + progress + "% done");
//       switch (snapshot.state) {
//         case "paused":
//           console.log("Upload is paused");
//           break;
//         case "running":
//           console.log("Upload is running");
//           break;
//       }
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
// };

// export const FbDeleteImageFile = (id: number) => {
//   const storage = getStorage();

//   const desertRef = ref(storage, "images/" + id);

//   // Delete the file
//   deleteObject(desertRef)
//     .then(() => {})
//     .catch((error) => {
//       console.log(error);
//     });
// };

import imageCompression from "browser-image-compression";

//setState로 넘기는 방법 뿐인가?
export async function ImgConvert(
  file: File,
  setFileURL: React.Dispatch<React.SetStateAction<string>>
) {
  const options = {
    maxSizeMB: 2,
    maxWidthOrHeight: 1920,
  };

  try {
    const compressedFile = await imageCompression(file, options);

    const promise = imageCompression.getDataUrlFromFile(compressedFile);
    promise.then((result) => {
      setFileURL(result);
    });
  } catch (error) {
    console.log(error);
  }
}
