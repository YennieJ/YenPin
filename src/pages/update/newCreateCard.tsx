import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { AuthContext } from "service/authContext";
import { useNavigate } from "react-router";

import styled from "styled-components";

export const CardForm = styled.form`
  border: 10px solid red;

  display: flex;
  flex-direction: column;

  width: 100%;
`;
export const Content = styled.div`
  border: 10px solid gold;

  display: flex;
`;

export const ImgContainer = styled.div`
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: 350px;
  height: 350px;
  img {
    width: 35px;
    height: 35px;
    font-size: 20px;
    border: 1px solid gray;
    border-radius: 10px;
  }
  label {
    border: 1px solid gray;
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;
  }
`;

export const TextContainer = styled.div`
  border: 10px solid purple;
`;

export const Overlay = styled.div``;

export const OverlayContent = styled.div``;

export const AddFileButton = styled.button``;

export const ButtonContainer = styled.div``;

export const Button = styled.div``;

interface IForm {
  image: FileList;
  title: string;
  message: string;
}

const db = getFirestore();

const NewCreateCard = () => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm<IForm>();
  const [fileURL, setFileURL] = useState<string>();

  const image = watch("image");

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setFileURL(URL.createObjectURL(file));
    }
  }, [image]);

  //userUid 필요하다 꼭(로그인하라는말임)
  const onValid = async (data: any) => {
    const id = new Date().getTime();
    // const image = fileURL;
    // const title = data.title;
    // const message = data.message.trim();
    if (!fileURL) {
      setError("image", { message: "Select your card image" });
    } else {
      await setDoc(doc(db, `/cards/${id}`), {
        id: id,
        image: fileURL,
        title: data.title,
        message: data.message.trim(),
        user: userUid,
        createdAt: new Date(),
        updatedAt: new Date(),
        likeCount: 0,
        likeUids: [],
      });
      navigate("/list");
    }
  };
  return (
    <>
      <CardForm onSubmit={handleSubmit(onValid)}>
        <Content>
          <ImgContainer>
            <img src={fileURL} alt="" />
            <span>{errors?.image?.message}</span>
            <label htmlFor="fileUpload"> Select file</label>
            <input
              hidden
              type="file"
              id="fileUpload"
              {...register("image", { required: true })}
            />
          </ImgContainer>
          <TextContainer>
            <input
              type="text"
              {...register("title", { required: "Write your card title" })}
            />
            <span>{errors?.title?.message}</span>
            <input type="text" {...register("message")} />
          </TextContainer>
        </Content>
        <button>SUBMIT</button>
      </CardForm>
    </>
  );
};

export default NewCreateCard;
