import React, { useState, useRef } from "react";

import { FbSaveCard } from "service/card_repository";
import { FbUploadImageFile } from "service/img_uploader";

import imageCompression from "browser-image-compression";

import * as S from "./cardAddForm.styled";
import DialogBox from "components/dialogBox/dialogBox";
import { CardType } from "types";
import { useMutation, useQueryClient } from "react-query";

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
  const basicHeight = message ? messageRef.current?.offsetHeight : 32;

  const queryClient = useQueryClient();
  const UpdateMutation = useMutation({
    mutationFn: (newCard: CardType) => FbSaveCard(userUid, newCard),

    onSuccess: () => {
      // 요청이 성공한 경우
      queryClient.invalidateQueries(["myCards"]);
    },
    onError: (error) => {
      // 요청에 에러가 발생된 경우
      // console.log("onError");
    },
    onSettled: () => {
      // 요청이 성공하든, 에러가 발생되든 실행하고 싶은 경우
      // console.log("onSettled");
    },
  });

  const onCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (cardNameRef.current!.value === "" || fileRef.current!.value === "") {
      alert("카드 이름과 파일은 비울 수 없습니다.");
    } else {
      const id = new Date().getTime();
      const messageTrim = message!.trim();
      const newCard = {
        id: id,
        cardName: cardNameRef.current!.value,
        fileURL: fileURL,
        message: messageTrim,
        user: userUid,
      };
      UpdateMutation.mutate(newCard);
      file && FbUploadImageFile(file, id);
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
  };

  return (
    <DialogBox preview>
      <S.CardForm ref={formRef} onSubmit={onCardSubmit}>
        <S.Content>
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
          <S.TextContainer>
            <input
              hidden
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={onFileChange}
            />
            <input
              ref={cardNameRef}
              type="text"
              placeholder="카드 이름"
              maxLength={15}
            />
            <span>최대 15글자</span>

            <textarea
              rows={1}
              placeholder="사진에 대해 설명하세요"
              maxLength={200}
              ref={messageRef}
              onChange={textHeightHandler}
            />
            <span>{textLength}/200</span>
          </S.TextContainer>
        </S.Content>
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
