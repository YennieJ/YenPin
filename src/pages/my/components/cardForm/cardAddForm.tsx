import React, { useState, useRef } from "react";

import { FbSaveCard } from "service/card_repository";
import { FbUploadImageFile } from "service/img_uploader";

import imageCompression from "browser-image-compression";

import * as S from "./cardAddForm.styled";
import PreviewDialog from "components/previewDialogBox/previewDialog";

interface CardProps {
  handleCardModal: () => void;
  onCurrentPage: () => void;
  userUid: string;
}

const CardAddForm = ({
  handleCardModal,
  onCurrentPage,
  userUid,
}: CardProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const cardNameRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  //firebase upload를 위한
  const [file, setFile] = useState<File>();
  const [fileURL, setFileURL] = useState<string>("");

  const [textLength, setTextLength] = useState<number>(0);

  const [message, setMessage] = useState<string>("");
  const basicHeight = message ? messageRef.current?.offsetHeight : 30;

  const addCard = (e: React.FormEvent) => {
    const id = new Date().getTime();
    const trim = message!.trim();
    const newCard = {
      id: id,
      cardName: cardNameRef.current!.value,
      fileURL: fileURL,
      message: trim,
      user: userUid,
    };
    e.preventDefault();

    if (newCard.cardName === "" || newCard.fileURL === "") {
      alert("칸을 비울 수 없습니다.");
    } else {
      FbSaveCard(userUid, newCard);
      // FbUploadImageFile(file, id);
      formRef.current?.reset();
      handleCardModal();
      onCurrentPage();
    }
  };

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = e;
    const file = files![0];
    // setFile(file);
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
        setFileURL(result);
      });
    } catch (error) {
      console.log(error);
    }

    // imageCompression(file, {
    //   maxSizeMB: 1,
    //   maxWidthOrHeight: 1920,
    // }).then((compressedFile) => {
    //   const newFile = new File([compressedFile], file.name, {
    //     type: file.type,
    //   });
    //   console.log(newFile);
    // });

    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onloadend = (event: ProgressEvent<FileReader>) => {
    //   setFileURL(event.target!.result as string);
    // };
  };

  const onButtonClick = () => {
    fileRef.current?.click();
  };

  const textHeightHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setTextLength(messageRef.current!.value.length);
    messageRef.current!.style.height = "auto"; //초기화를 위해
    messageRef.current!.style.height =
      messageRef.current!.scrollHeight + 2 + "px";
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
                onChange={textHeightHandler}
                style={{ height: basicHeight + "px" }}
              />
              <span>{textLength}/200</span>
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
