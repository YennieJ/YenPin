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
  handleLastPage?: any;
}

const CardForm = ({
  cards,
  setCards,
  closeCardAddModal,
  handleLastPage,
}: CardsProps) => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;

  //form reset을 위해
  const formRef = useRef<HTMLFormElement>(null);
  //value 값을 위해
  const cardNameRef = useRef<HTMLInputElement>(null);
  //UI를 위해서 버튼을 클릭했을 때 인풋클릭한것처럼
  const fileRef = useRef<HTMLInputElement>(null);

  //firebase upload를 위한
  const [file, setFile] = useState<string>("");
  const [fileURL, setFileURL] = useState<string>("");
  const [id, setId] = useState<number | undefined>();

  // 파일 오리지널 네임을 표시하기 위해서
  const [userFileName, setUserFileName] = useState<string>("");

  const addCard = (e: React.FormEvent) => {
    const card = {
      id: id,
      fileName: cardNameRef.current?.value,
      fileURL: fileURL,
    };
    e.preventDefault();
    if (card.fileName === "" || card.fileURL === "") {
      alert("다 입력하렴");
    } else {
      setCards([...cards, card]);
      SaveCard(userUid, card);
      UploadImageFile(file, id);
      formRef.current?.reset();
      closeCardAddModal();
      handleLastPage();
    }
  };

  //UploadImageFile을 addCard할때 업로드 될 수 있게
  // const handleUploadFile = (
  //   e: React.ChangeEvent<EventTarget & HTMLInputElement>
  // ) => {
  //   const file: FileList | null = e.target.files;
  //   setUserFileName(file![0].name);
  //   UploadImageFile(file, setFile, setId);
  // };

  const onFileChange = (e: any) => {
    const sid = new Date().getTime();
    setId(sid);
    const file = e.target.files[0];
    setFile(file);
    setUserFileName(file.name);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (event: any) => {
      setFileURL(event.target.result);
    };
  };

  const onButtonClick = () => {
    fileRef.current?.click();
  };

  return (
    <DialogBox>
      <S.CardForm ref={formRef} onSubmit={addCard}>
        <input ref={cardNameRef} type="text" placeholder="카드 이름" />
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={onFileChange}
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
