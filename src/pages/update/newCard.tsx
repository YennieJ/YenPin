import React, { useContext, useEffect } from "react";
import { AuthContext } from "service/authContext";
import { Type } from "./newMy";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import {
  arrayUnion,
  doc,
  getFirestore,
  setDoc,
  increment,
  arrayRemove,
} from "firebase/firestore";
const db = getFirestore();

interface Props {
  isActive?: boolean;
}
const LikeButton = styled.div<Props>`
  cursor: pointer;
  border: 5px solid ${(props) => (props.isActive ? "red" : "black")};
`;

interface INewCard {
  item: Type;
}
const NewCard = ({ item }: INewCard) => {
  const likeUid = item.likeUids.includes(item.user);

  console.log(likeUid);

  const { register, handleSubmit } = useForm();

  const cityRef = doc(db, "cities", "BJ");
  setDoc(cityRef, { capital: true }, { merge: true });

  const onValid = async (data: any) => {
    await setDoc(
      doc(db, `/cards/${item.id}`),
      {
        title: data.update,
      },
      { merge: true }
    );
  };

  const thumbs = async () => {
    likeUid
      ? await setDoc(
          doc(db, `/cards/${item.id}`),
          {
            likeCount: increment(-1),
            likeUids: arrayRemove(item.user),
          },
          { merge: true }
        )
      : await setDoc(
          doc(db, `/cards/${item.id}`),
          {
            likeCount: increment(1),
            likeUids: arrayUnion(item.user),
          },
          { merge: true }
        );
  };
  return (
    <>
      <h1>{item.title}</h1>

      <LikeButton onClick={thumbs} isActive={likeUid}>
        likes
      </LikeButton>
      <span>{item.likeCount}</span>

      <form onSubmit={handleSubmit(onValid)}>
        <input type="text" {...register("update")} />
      </form>
    </>
  );
};

export default NewCard;
