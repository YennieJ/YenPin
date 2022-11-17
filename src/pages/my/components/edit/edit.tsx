import React, { useState, useRef } from "react";

import { FbSaveCard } from "service/card_repository";
import { FbUploadImageFile } from "service/img_uploader";

import DialogBox from "components/dialogBox/dialogBox";
import * as S from "./edit.styled";

interface Props {
  setEditModal: any;
  card: any;
}
const Edit = ({ setEditModal, card }: Props) => {
  const { cardName, fileURL, id, user } = card;

  const cardNameRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  //firebase upload를 위한
  const [file, setFile] = useState<File>();
  const [newFileURL, setNewFileURL] = useState<string>("");

  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [textLength, setTextLength] = useState<number>(200);

  const updateCard = (e: React.FormEvent) => {
    const card = {
      id: id,
      cardName: cardNameRef.current?.value,
      fileURL: newFileURL,
      message: messageRef.current?.value,
      user: user,
    };
    e.preventDefault();

    if (card.cardName === "" || card.fileURL === "") {
      alert("칸을 비울 수 없습니다.");
    } else {
      FbSaveCard(user, card);
      FbUploadImageFile(file, id);
      setEditModal(false);
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = e;
    const file = files![0];
    console.log(file.name);
    setFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (event: ProgressEvent<FileReader>) => {
      setNewFileURL(event.target?.result as string);
    };
  };

  const onButtonClick = () => {
    fileRef.current?.click();
  };

  return (
    <DialogBox>
      <S.CardForm>
        <input
          hidden
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={onFileChange}
        />

        <S.ImgContainer onClick={onButtonClick}>
          {newFileURL ? (
            <>
              <S.Overlay>
                <S.OverlayContent>Change File</S.OverlayContent>
              </S.Overlay>
              <img alt="" src={newFileURL} />
            </>
          ) : (
            <>
              <S.Overlay>
                <S.OverlayContent>Change File</S.OverlayContent>
              </S.Overlay>
              <img alt="" src={fileURL} />
            </>
          )}
        </S.ImgContainer>

        <input
          ref={cardNameRef}
          type="text"
          placeholder="카드 이름"
          maxLength={20}
          defaultValue={cardName}
        />
        <S.ButtonContainer>
          <S.Button type="button" onClick={() => setEditModal(false)}>
            취소
          </S.Button>
          <S.Button type="submit" onClick={updateCard}>
            수정
          </S.Button>
        </S.ButtonContainer>
      </S.CardForm>
    </DialogBox>
  );
};
export default Edit;
