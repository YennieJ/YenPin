import React, { useState, useRef, useContext } from "react";
import { SaveCard } from "service/card_repository";
import { UploadImageFile } from "service/img_uploader";

import { AuthContext } from "service/authContext";

import * as S from "./cardForm.styled";

interface CardsProps {
  cards: any;
  setCards: any;
  closeCardAddModal: any;
}

const CardForm = ({ cards, setCards, closeCardAddModal }: CardsProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;

  const [file, setFile] = useState<string>("");
  const [id, setId] = useState<number | undefined>();
  console.log(id);
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

  return (
    <div>
      <form ref={formRef} onSubmit={addCard}>
        <input ref={inputRef} type="text" />
        <input type="file" accept="image/*" onChange={handleUploadFile} />
        <button type="submit">등록</button>
      </form>
      <button onClick={() => closeCardAddModal(id)}>돌아가기</button>
    </div>
  );
};

export default CardForm;
