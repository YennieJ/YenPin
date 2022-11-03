import React, { useState, useRef, useContext } from "react";

import { AuthContext } from "service/authContext";
import { SaveCard } from "service/card_repository";
import { UploadImageFile } from "service/img_uploader";

import DialogBox from "components/dialogBox/dialogBox";

import * as S from "./cardForm.styled";

interface CardsProps {
  cards: any;
  setCards: any;
  closeCardAddModal: any;
}

const CardForm = ({ cards, setCards, closeCardAddModal }: CardsProps) => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<string>("");
  const [id, setId] = useState<number | undefined>();
  const [userFileName, setUserFileName] = useState<string>("");

  const addCard = (e: React.FormEvent) => {
    const card = {
      id: id,
      fileName: inputRef.current?.value,
      fileURL: file,
    };
    e.preventDefault();
    // if (card.fileName === "" || card.fileURL === "") {
    //   alert("다 입력하렴");
    // } else {
    setCards([...cards, card]);
    formRef.current?.reset();
    SaveCard(userUid, card);
    closeCardAddModal();
    // }
  };

  //UploadImageFile을 addCard할때 업로드 될 수 있게
  const handleUploadFile = (
    e: React.ChangeEvent<EventTarget & HTMLInputElement>
  ) => {
    const file: FileList | null = e.target.files;
    // console.log(file![0]);
    setUserFileName(file![0].name);
    UploadImageFile(file, setFile, setId);
  };

  const onButtonClick = () => {
    fileRef.current?.click();
  };

  return (
    <DialogBox>
      <S.CardForm ref={formRef} onSubmit={addCard}>
        <input ref={inputRef} type="text" placeholder="카드 이름" />
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={handleUploadFile}
        />
        <S.AddFileButton type="button" onClick={onButtonClick}>
          {" "}
          {userFileName || "Add File"}
        </S.AddFileButton>
        <S.SubmitButton type="button" onClick={() => closeCardAddModal(id)}>
          돌아가기
        </S.SubmitButton>
        <S.SubmitButton type="submit">등록</S.SubmitButton>
      </S.CardForm>
    </DialogBox>
  );
};

export default CardForm;
