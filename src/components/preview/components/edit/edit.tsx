import React, { useState, useRef } from "react";

import { FbSaveCard } from "service/card_repository";
import { FbUploadImageFile } from "service/img_uploader";

import imageCompression from "browser-image-compression";

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

  const [textLength, setTextLength] = useState<number>(defaultLength);

  const textHeightHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // messageRef.current!.style.height = "auto"; //초기화를 위해
    // messageRef.current!.style.height = messageRef.current?.scrollHeight + "px";
    // setNewMessage(e.target.value);
    setTextLength(e.target.value.length);
  };
  //////////////////////////////////////////////////////////////

  const [newMessage, setNewMessage] = useState<string | undefined>(message);
  const basicHeight = newMessage!.split("\n").length * 27;

  const [textareaHeight, setTextareaHeight] = useState(basicHeight);

  ////////////////////////////////////////////////////////////////////////////
  const updateCard = (e: React.FormEvent) => {
    const card = {
      id: id,
      cardName: cardNameRef.current!.value,
      fileURL: newFileURL,
      message: messageRef.current!.value,
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
  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = e;
    const file = files![0];

    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 1920,
    };
    try {
      const compressedFile = await imageCompression(file, options);
      setFile(compressedFile);
      // resize된 이미지의 url을 받아 fileUrl에 저장
      const promise = imageCompression.getDataUrlFromFile(compressedFile);
      promise.then((result) => {
        setNewFileURL(result);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onButtonClick = () => {
    fileRef.current?.click();
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
              <span>최대 15글자</span>
            </S.TextContainer>
            <S.TextContainer>
              <textarea
                ref={messageRef}
                placeholder="사진에 대해 설명하세요"
                maxLength={70}
                onChange={textHeightHandler}
                defaultValue={message}
                // rows={1}
                // style={{ height: textareaHeight + "px" }}
              />

              <span>{textLength}/70</span>
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
