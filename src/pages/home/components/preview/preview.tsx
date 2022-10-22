import React, { useState, useEffect } from "react";

import { storage } from "service/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import * as S from "./preview.styled";

interface FileProps {
  name: string;
}
const Preview = () => {
  // const { id, fileName, fileURL } = cards;

  const onFileChange = (
    e: React.ChangeEvent<EventTarget & HTMLInputElement>
  ) => {
    e.preventDefault();
    const file = e.target.files;
    if (!file) return null;
    const storageRef = ref(storage, "images/" + file[0].name);

    const uploadTask = uploadBytesResumable(storageRef, file[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  return (
    <>
      <h1>preview</h1>
      <form>
        <input type="file" onChange={onFileChange}></input>
        <button type="submit">upload</button>
      </form>
      {/* <img src={file}></img> */}
    </>
  );
};

export default Preview;
