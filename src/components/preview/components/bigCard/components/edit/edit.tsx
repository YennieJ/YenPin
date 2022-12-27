import React, { useState, useRef } from "react";

import { FbSaveCard, FbUpdateCard } from "service/card_repository";
import { FbUploadImageFile } from "service/img_uploader";

import imageCompression from "browser-image-compression";

import * as S from "./edit.styled";

import { CardType } from "types";
import { useMutation, useQueryClient } from "react-query";

interface EditProps {
  card: CardType;
  onModalClose: () => void;
  toggleEdit: () => void;
}
const Edit = ({ card, onModalClose, toggleEdit }: EditProps) => {
  const { cardName, fileURL, message, id, user } = card;

  const defaultLength = message ? message.length : 0;

  // const cardNameRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  // const messageRef = useRef<HTMLPreElement>(null);
  const newMessageRef = useRef<HTMLTextAreaElement>(null);
  //////////
  const [newCardName, setNewCardName] = useState<string>(cardName);
  const [newMessage, setNewMessage] = useState<string | undefined>(message);

  //////////
  //firebase upload를 위한
  const [file, setFile] = useState<File>();
  const [newFileURL, setNewFileURL] = useState<string>(fileURL);

  const [textLength, setTextLength] = useState<number>(defaultLength);

  const textHeightHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(e.target.value);
    setTextLength(e.target.value.length);
  };

  const onNewCardNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCardName(e.target.value);
  };

  const closeModal = () => {
    if (window.confirm("화면을 나가시겠습니까?") === true) {
      onModalClose();
    } else return null;
  };

  const queryClient = useQueryClient();
  const UpdateMutation = useMutation({
    mutationFn: (newCard: CardType) => FbUpdateCard(newCard),

    onSuccess: () => {
      // 요청이 성공한 경우
      queryClient.invalidateQueries(["allCards"]);
      queryClient.invalidateQueries(["myCards"]);
    },
    onError: (error) => {
      // 요청에 에러가 발생된 경우
      // console.log(error);
    },
    onSettled: () => {
      // 요청이 성공하든, 에러가 발생되든 실행하고 싶은 경우
      // console.log("onSettled");
    },
  });

  const updateCard = (e: React.FormEvent) => {
    e.preventDefault();

    const newMessageTrim = newMessage!.trim();

    const newCard = {
      id: id,
      cardName: newCardName,
      fileURL: newFileURL,
      message: newMessageTrim,
      user: user,
    };

    if (newCard.cardName === "") {
      alert("카드 이름과 파일은 비울 수 없습니다.");
    } else {
      UpdateMutation.mutate(newCard);
      file && FbUploadImageFile(file, id);
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
    <S.CardForm>
      <S.Content>
        <S.ImgContainer onClick={onButtonClick}>
          <S.Overlay>
            <S.OverlayContent>Change File</S.OverlayContent>
          </S.Overlay>
          <img alt="" src={newFileURL} />
          <input
            hidden
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={onFileChange}
          />
        </S.ImgContainer>
        <S.TextContainer>
          <input
            type="text"
            placeholder="카드 이름"
            maxLength={15}
            value={newCardName}
            onChange={onNewCardNameChange}
          />
          <span>최대 15글자</span>
          {newMessage ? (
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
            />
          ) : (
            <textarea
              rows={1}
              ref={newMessageRef}
              placeholder="사진에 대해 설명하세요"
              onChange={textHeightHandler}
            />
          )}
          <span>{textLength}/200</span>
        </S.TextContainer>
      </S.Content>
      <S.ButtonContainer>
        <S.Button type="button" onClick={closeModal}>
          취소
        </S.Button>
        <S.Button type="submit" onClick={updateCard}>
          완료
        </S.Button>
      </S.ButtonContainer>
    </S.CardForm>
  );
};
export default Edit;
