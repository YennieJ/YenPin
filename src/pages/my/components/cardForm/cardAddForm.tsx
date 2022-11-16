import React, { useState, useRef, useContext } from "react";

import { AuthContext } from "service/authContext";
import { FbSaveCard } from "service/card_repository";
import { FbUploadImageFile } from "service/img_uploader";

import DialogBox from "components/dialogBox/dialogBox";

import * as S from "./cardAddForm.styled";

interface CardProps {
  handleCardModal: () => void;
  setCurrentPage: any;
}

const CardAddForm = ({ handleCardModal, setCurrentPage }: CardProps) => {
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

  const addCard = (e: React.FormEvent) => {
    const id = new Date().getTime();

    const newCard = {
      id: id,
      cardName: cardNameRef.current?.value,
      fileURL: fileURL,
      user: userUid,
    };
    e.preventDefault();

    if (newCard.cardName === "" || newCard.fileURL === "") {
      alert("다 입력하렴");
    } else {
      FbSaveCard(userUid, newCard);
      FbUploadImageFile(file, id);
      formRef.current?.reset();
      handleCardModal();
      setCurrentPage(1);
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = e;
    const file = files![0];
    setFile(file);
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
          hidden
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={onFileChange}
        />
        {fileURL ? (
          <S.ImgContainer onClick={onButtonClick}>
            <S.Overlay>
              <S.OverlayContent>Change File</S.OverlayContent>
            </S.Overlay>
            <img alt="" src={fileURL} />
          </S.ImgContainer>
        ) : (
          <S.AddFileButton type="button" onClick={onButtonClick}>
            Add File
          </S.AddFileButton>
        )}{" "}
        <input
          ref={cardNameRef}
          type="text"
          placeholder="카드 이름"
          maxLength={20}
        />
        <S.ButtonContainer>
          <S.Button type="button" onClick={() => handleCardModal()}>
            취소
          </S.Button>
          <S.Button type="submit">등록</S.Button>
        </S.ButtonContainer>
      </S.CardForm>
    </DialogBox>
  );
};

export default CardAddForm;
