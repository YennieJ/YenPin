import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { AuthContext } from "service/authContext";
import imageCompression from "browser-image-compression";

const db = getFirestore();
const Temp = () => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;

  const { register, handleSubmit, watch } = useForm<any>();

  const [fileURL, setFileURL] = useState<string>();

  const image = watch("image");

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setFileURL(URL.createObjectURL(file));
    }
  }, [image]);

  const onValid = async (data: any) => {
    const id = new Date().getTime();
    const image = fileURL;
    const title = data.title;
    const message = data.message.trim();
    await setDoc(doc(db, `/cards/${id}`), {
      id: id,
      image: image,
      title: title,
      message: message,
      user: userUid,
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <img style={{ width: "35px", height: "35px" }} src={fileURL} alt="" />
        <input type="file" {...register("image")} />
        <input type="text" {...register("title")} />
        <input type="text" {...register("message")} />
        <button>SUBMIT</button>
      </form>
    </>
  );
};

export default Temp;
