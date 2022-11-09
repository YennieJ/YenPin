import React, { useState, useRef, useContext } from "react";

import { AuthContext } from "service/authContext";
import { FbSaveCard } from "service/card_repository";
import { FbUploadImageFile } from "service/img_uploader";

import DialogBox from "components/dialogBox/dialogBox";

import * as S from "./cardAddForm.styled";

interface CardProps {
  handleCardModal: () => void;
}

const CardAddForm = ({ handleCardModal }: CardProps) => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;

  //form reset을 위해
  const formRef = useRef<HTMLFormElement>(null);
  //value 값을 위해
  const cardNameRef = useRef<HTMLInputElement>(null);
  //UI를 위해서 버튼을 클릭했을 때 인풋클릭한것처럼
  const fileRef = useRef<HTMLInputElement>(null);

  //firebase upload를 위한
  const [file, setFile] = useState<File>();
  const [fileURL, setFileURL] = useState<string>("");

  // 파일 오리지널 네임을 표시하기 위해서
  const [userFileName, setUserFileName] = useState<string>("");

  const addCard = (e: React.FormEvent) => {
    const id = new Date().getTime();

    const newCard = {
      id: id,
      fileName: cardNameRef.current?.value,
      fileURL: fileURL,
    };
    e.preventDefault();
    if (newCard.fileName === "" || newCard.fileURL === "") {
      alert("다 입력하렴");
    } else {
      FbSaveCard(userUid, newCard);
      FbUploadImageFile(file, id);
      formRef.current?.reset();
      handleCardModal();
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = e;
    const file = files![0];
    setFile(file);
    setUserFileName(file.name);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (event: ProgressEvent<FileReader>) => {
      setFileURL(event.target?.result as string);
    };
  };

  const onButtonClick = () => {
    fileRef.current?.click();
  };

  return (
    <DialogBox>
      <S.CardForm ref={formRef} onSubmit={addCard}>
        <input
          ref={cardNameRef}
          type="text"
          placeholder="카드 이름"
          maxLength={25}
        />
        <input
          hidden
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={onFileChange}
        />
        <S.AddFileButton type="button" onClick={onButtonClick}>
          {" "}
          {userFileName || "Add File"}
        </S.AddFileButton>
        <S.SubmitButton goback type="button" onClick={() => handleCardModal()}>
          돌아가기
        </S.SubmitButton>
        <S.SubmitButton type="submit">등록</S.SubmitButton>
      </S.CardForm>
    </DialogBox>
  );
};

export default CardAddForm;
