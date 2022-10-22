import React, { useRef, useState, useContext, useEffect } from "react";

import { AuthContext } from "service/authContext";

import { storage } from "service/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { SyncCards, SaveCard, DeleteCard } from "service/card_repository";
import ImageUploader from "service/img_uploader";
import * as S from "./my.styled";
import card from "pages/home/components/card";
import { idText } from "typescript";

// import {Props as MyProps} from '../my.tsx'
export interface CardType {
  id: number;
  fileName?: string;
  fileURL: string;
}
// 부모에서 상속받을떼???????????쓰는거래
// interface CardProps {
//   cards: CardType[];
// }

// const cardRepository = new CardRepository();
//여기서 가져오는것이 맞는것인가 아니면 최상단에서 가져와서 프롭스로 가져와야하는가

const My = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;

  const [temp, setTemp] = useState<string>();
  const [cards, setCards] = useState<CardType[]>([]);
  const [file, setFile] = useState<string>("");
  // const imgUploader = new ImageUploader();

  useEffect(() => {
    setTemp("하나");
  }, []);
  console.log(cards);
  const uploadFile = (e: React.ChangeEvent<EventTarget & HTMLInputElement>) => {
    const file = e.target.files;
    if (!file) return null;
    // setFile(file[0]);
    const name = new Date().getTime();
    // const storageRef = ref(storage, 'images/rivers.jpg');
    // const desertRef = ref(storage, 'images/desert.jpg')
    const storageRef = ref(storage, "images/" + name);

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
          setFile(downloadURL);
        });
      }
    );
  };

  // const filehandler = async (event: any) => {
  //   const uploaded = await imgUploader.upload(event.target.files[0]);
  //   console.log(uploaded);
  //   setFile(uploaded.url);
  // };
  useEffect(() => {
    SyncCards(userUid, (dbCards: CardType[]) => {
      // let temp = []
      // Object.values(dbCards).map((data) => (
      //   temp.push(data)
      // ))
      // setCards(temp);
      if (!dbCards) return null;

      setCards(Object.values(dbCards).map((data) => data));
    });
  }, []);

  const addCard = (e: React.FormEvent) => {
    const card = {
      id: Date.now(),
      fileName: inputRef.current?.value,
      fileURL: file,
    };
    e.preventDefault();
    setCards([...cards, card]);
    formRef.current?.reset();
    SaveCard(userUid, card);
  };

  const DeleteCard = (id: number) => {
    const filteredCard = cards.filter((card) => card.id !== id);
    setCards(filteredCard);
  };

  return (
    <>
      <S.Container>
        <form ref={formRef} onSubmit={addCard}>
          <input ref={inputRef} type="text" />
          <input type="file" accept="image/*" onChange={uploadFile} />
          <button type="submit">등록</button>
        </form>
      </S.Container>
      {/* 
      {Array.isArray(cards)
        ? cards.map((card) => {
            console.log(card);
            return (
              <div key={card.id}>
                {card.fileName}
                <img src={card.fileURL}></img>
                <button onClick={() => DeleteCard(card.id)}>삭제</button>
              </div>
            );
          })
        : null} */}
      {cards.map((card) => (
        <div key={card.id}>
          {card.fileName}
          <img src={card.fileURL}></img>
          <button onClick={() => DeleteCard(card.id)}>삭제</button>
        </div>
      ))}
      {temp}
    </>
  );
};

// export type {Props as MyProps};
export default My;
