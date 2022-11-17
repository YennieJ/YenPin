import React, { useState, useRef, useContext, useCallback } from "react";

import { AuthContext } from "service/authContext";
import { FbSaveCard } from "service/card_repository";
import { FbUploadImageFile } from "service/img_uploader";

import * as S from "./cardAddForm.styled";
import PreviewDialog from "components/previewDialogBox/previewDialog";

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

  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [textLength, setTextLength] = useState<number>(200);
  // const [message, setMessage] = useState<any>();

  const addCard = (e: React.FormEvent) => {
    const id = new Date().getTime();

    const newCard = {
      id: id,
      cardName: cardNameRef.current?.value,
      fileURL: fileURL,
      message: messageRef.current?.value,
      user: userUid,
    };
    e.preventDefault();

    if (newCard.cardName === "" || newCard.fileURL === "") {
      alert("칸을 비울 수 없습니다.");
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

  // 이거.. 어떻게 넘길수 있을까.. styled component로.
  const handleTextareaHeight = () => {
    setTextLength(200 - messageRef.current!.value.length);
    messageRef.current!.style.height = "auto"; //초기화를 위해
    messageRef.current!.style.height = messageRef.current?.scrollHeight + "px";
  };

  return (
    <PreviewDialog>
      <S.CardForm ref={formRef} onSubmit={addCard}>
        <S.Header>
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
          )}
          <S.DetailContainer>
            <input
              hidden
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={onFileChange}
            />
            <S.TextContainer>
              <input
                ref={cardNameRef}
                type="text"
                placeholder="카드 이름"
                maxLength={15}
              />
              <div>최대 15글자</div>
            </S.TextContainer>
            <S.TextContainer>
              <textarea
                rows={1}
                placeholder="사진에 대해 설명하세요"
                maxLength={200}
                ref={messageRef}
                onChange={handleTextareaHeight}
              />
              <span>
                <div>최대 200글자</div>
                <div>{textLength}</div>
              </span>
            </S.TextContainer>
          </S.DetailContainer>
        </S.Header>
        <S.ButtonContainer>
          <S.Button type="button" onClick={() => handleCardModal()}>
            취소
          </S.Button>
          <S.Button type="submit">등록</S.Button>
        </S.ButtonContainer>
      </S.CardForm>
    </PreviewDialog>
  );
};

export default CardAddForm;
