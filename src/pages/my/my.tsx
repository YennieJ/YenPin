import React, { useRef, useState, useContext, useEffect } from "react";
import { AuthContext } from "service/authContext";
// import { AuthProps, OnAuthChange } from "service/auth_service";
import { SyncCards, SaveCard, DeleteCard } from "service/card_repository";
import { UploadImageFile, DeleteImageFile } from "service/img_uploader";

import DialogBox from "components/dialogBox/dialogBox";
import * as S from "./my.styled";

// import {Props as MyProps} from '../my.tsx'
export interface CardType {
  id: number | undefined;
  fileName?: string;
  fileURL: string;
}
// 부모에서 상속받을떼???????????쓰는거래
// interface CardProps {
//   cards: CardType[];
// }

const My = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;

  const [cards, setCards] = useState<CardType[]>([]);
  const [file, setFile] = useState<string>("");
  const [id, setId] = useState<number>();

  // useEffect(() => {
  //   OnAuthChange((user: any) => {
  //     if (user) {
  //       console.log(user);
  //     } else {
  //       console.log("뭐야");
  //     }
  //   });
  // }, []);
  const addCard = (e: React.FormEvent) => {
    const card = {
      id: id,
      fileName: inputRef.current?.value,
      fileURL: file,
    };

    e.preventDefault();
    setCards([...cards, card]);
    formRef.current?.reset();
    SaveCard(userUid, card);
  };

  const handleUploadFile = (
    e: React.ChangeEvent<EventTarget & HTMLInputElement>
  ) => {
    UploadImageFile(e, setFile, setId);
  };

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
  }, [userUid]);

  const deleteCard = (id: number) => {
    const filteredCard = cards.filter((card) => card.id !== id);
    setCards(filteredCard);
    DeleteCard(userUid, id);
    DeleteImageFile(id);
  };

  return (
    <>
      <div>
        <form ref={formRef} onSubmit={addCard}>
          <input ref={inputRef} type="text" />
          <input type="file" accept="image/*" onChange={handleUploadFile} />
          <button type="submit">등록</button>
        </form>
      </div>

      {cards.map((card) => (
        <div key={card.id}>
          {card.fileName}
          <img alt="" src={card.fileURL}></img>
          <button onClick={() => deleteCard(card.id!)}>삭제</button>
        </div>
      ))}
    </>
  );
};

// export type {Props as MyProps};
export default My;
