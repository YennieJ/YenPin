import React, { useState, useRef } from "react";

import { DialogBox } from "components/dialogBox/dialogBox.styled";
import * as S from "./edit.styled";
import { FbSaveCard } from "service/card_repository";
import { FbUploadImageFile } from "service/img_uploader";

interface Props {
  setEditModal: any;
  card: any;
}
const Edit = ({ setEditModal, card }: Props) => {
  const { cardName, fileName, fileURL, id, user } = card;

  const cardNameRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  //firebase upload를 위한
  const [file, setFile] = useState<File>();
  const [newFileURL, setNewFileURL] = useState<string>("");

  // 파일 오리지널 네임을 표시하기 위해서
  const [userFileName, setUserFileName] = useState<string>("");

  const updateCard = (e: React.FormEvent) => {
    const card = {
      id: id,
      fileName: userFileName,
      cardName: cardNameRef.current?.value,
      fileURL: newFileURL,
      user: user,
    };
    e.preventDefault();

    FbSaveCard(user, card);
    FbUploadImageFile(file, id);
    setEditModal(false);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = e;
    const file = files![0];
    console.log(file.name);
    setFile(file);
    setUserFileName(file.name);
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
          ref={cardNameRef}
          type="text"
          placeholder="카드 이름"
          maxLength={20}
          defaultValue={cardName}
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
          {fileName}
        </S.AddFileButton>
        <S.SubmitButton
          goback
          type="button"
          onClick={() => setEditModal(false)}
        >
          돌아가기
        </S.SubmitButton>
        <S.SubmitButton type="submit" onClick={updateCard}>
          수정하기
        </S.SubmitButton>
      </S.CardForm>
    </DialogBox>
  );
};
export default Edit;
