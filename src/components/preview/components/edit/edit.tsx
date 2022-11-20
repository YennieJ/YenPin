import React, { useState, useRef } from "react";

import { FbSaveCard } from "service/card_repository";
import { FbUploadImageFile } from "service/img_uploader";

import * as S from "./edit.styled";
import PreviewDialog from "components/previewDialogBox/previewDialog";

import { CardType } from "types";

interface Props {
  card: CardType;
  onModalClose: () => void;
}
const Edit = ({ onModalClose, card }: Props) => {
  const { cardName, fileURL, message, id, user } = card;

  const defaultLength = message ? message.length : 0;

  const cardNameRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  //firebase upload를 위한
  const [file, setFile] = useState<File>();
  const [newFileURL, setNewFileURL] = useState<string>(fileURL);

  const [textLength, setTextLength] = useState<number>(200 - defaultLength);

  const updateCard = (e: React.FormEvent) => {
    const card = {
      id: id,
      cardName: cardNameRef.current!.value,
      fileURL: newFileURL,
      message: messageRef.current?.value,
      user: user,
    };
    e.preventDefault();

    if (card.cardName === "") {
      alert("칸을 비울 수 없습니다.");
    } else {
      FbSaveCard(user, card);
      FbUploadImageFile(file, id);
      onModalClose();
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
      setNewFileURL(event.target?.result as string);
    };
  };

  const onButtonClick = () => {
    fileRef.current?.click();
  };

  const handleTextareaHeight = () => {
    setTextLength(200 - messageRef.current!.value.length);
    messageRef.current!.style.height = "auto"; //초기화를 위해
    messageRef.current!.style.height = messageRef.current?.scrollHeight + "px";
  };

  return (
    <PreviewDialog>
      <S.CardForm>
        <S.Header>
          <S.ImgContainer onClick={onButtonClick}>
            {newFileURL ? (
              <S.ImgContainer>
                <S.Overlay>
                  <S.OverlayContent>Change File</S.OverlayContent>
                </S.Overlay>
                <img alt="" src={newFileURL} />
              </S.ImgContainer>
            ) : (
              <>
                <S.Overlay>
                  <S.OverlayContent>Change File</S.OverlayContent>
                </S.Overlay>
                <img alt="" src={fileURL} />
              </>
            )}
          </S.ImgContainer>
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
                defaultValue={cardName}
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
                defaultValue={message}
              />
              <span>
                {/* 히니민히끼? */}
                <div>최대 200글자</div>
                <div>{textLength}</div>
              </span>
            </S.TextContainer>
          </S.DetailContainer>
        </S.Header>
        <S.ButtonContainer>
          <S.Button type="button" onClick={() => onModalClose()}>
            취소
          </S.Button>
          <S.Button type="submit" onClick={updateCard}>
            완료
          </S.Button>
        </S.ButtonContainer>
      </S.CardForm>
    </PreviewDialog>
  );
};
export default Edit;
