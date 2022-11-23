import React, { useState, useRef, useEffect } from "react";

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

  // const cardNameRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLPreElement>(null);
  const newMessageRef = useRef<HTMLTextAreaElement>(null);
  //////////
  const [newCardName, setNewCardName] = useState<string>(cardName);
  const [newMessage, setNewMessage] = useState<string | undefined>(message);

  //////////
  //firebase upload를 위한
  const [file, setFile] = useState<File>();
  const [newFileURL, setNewFileURL] = useState<string>(fileURL);

  //textarea
  const basicHeight = message ? messageRef.current?.offsetHeight : 30;

  const [textLength, setTextLength] = useState<number>(defaultLength);
  const [onEditMode, setOnEditMode] = useState<boolean>(false);

  const textHeightHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(e.target.value);
    setTextLength(e.target.value.length);
    newMessageRef.current!.style.height = "auto"; //초기화를 위해
    newMessageRef.current!.style.height =
      newMessageRef.current!.scrollHeight + 2 + "px";
  };

  const updateCard = (e: React.FormEvent) => {
    const trim = newMessage!.trim();

    const card = {
      id: id,
      cardName: newCardName,
      fileURL: newFileURL,
      message: trim,
      user: user,
    };
    e.preventDefault();

    if (card.cardName === "") {
      alert("칸을 비울 수 없습니다.");
    } else {
      FbSaveCard(user, card);
      FbUploadImageFile(file, id);
      onModalClose();
      // setOnEditMode(false);
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

  useEffect(() => {
    if (onEditMode) {
      setTimeout(() => {
        newMessageRef.current!.focus();
        newMessageRef.current!.scrollTop = newMessageRef.current!.offsetHeight;
      });
    }
  }, [onEditMode]);

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
                type="text"
                placeholder="카드 이름"
                maxLength={15}
                value={newCardName}
                onChange={(e) => setNewCardName(e.target.value)}
              />
              <span>최대 15글자</span>
            </S.TextContainer>
            <S.TextContainer>
              {newMessage ? (
                onEditMode ? (
                  <textarea
                    rows={1}
                    ref={newMessageRef}
                    placeholder="사진에 대해 설명하세요"
                    maxLength={200}
                    onChange={textHeightHandler}
                    value={newMessage}
                    onFocus={(e) =>
                      e.currentTarget.setSelectionRange(
                        e.currentTarget.value.length,
                        e.currentTarget.value.length
                      )
                    }
                    style={{ height: basicHeight + "px" }}
                  />
                ) : (
                  <pre
                    ref={messageRef}
                    // onClick={() => temp()}
                    onClick={() => setOnEditMode(true)}
                    // style={{ height: basicHeight + "px" }}
                  >
                    {newMessage}
                  </pre>
                )
              ) : (
                <textarea
                  rows={1}
                  ref={newMessageRef}
                  placeholder="사진에 대해 설명하세요"
                  onChange={textHeightHandler}
                  style={{ height: basicHeight + "px" }}
                  onClick={() => setOnEditMode(true)}
                />
              )}
              <span>{textLength}/200</span>
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
