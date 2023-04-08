import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";

import { useUpdateMutationData } from "hooks/useQueryData";
import { ImgConvert } from "hooks/img_uploader";

import { CardType } from "types";

import * as S from "./edit.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

interface IEdit {
  card: CardType;
  onModalClose: () => void;
}

const Edit = ({ card, onModalClose }: IEdit) => {
  const { cardName, photoURL: cardURL, message } = card;

  const { mutate: updateCard } = useUpdateMutationData();

  const { register, getValues, handleSubmit } = useForm({
    defaultValues: { cardName, message },
  });

  const cardNameRegister = register("cardName");

  const messageRegister = register("message", {
    onChange: () => setTextLength(getValues("message").length),
  });

  const [textLength, setTextLength] = useState<number>(
    getValues("message").length
  );

  const [photoURL, setPhotoURL] = useState<string>(cardURL);

  const photoRef = useRef<HTMLInputElement>(null);

  const handlePhotoRef = () => {
    photoRef.current?.click();
  };

  const onPhotoCahnge = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = e;
    const file = files![0];
    ImgConvert(file, setPhotoURL);
  };

  const onValid = () => {
    const cardName = getValues("cardName");
    const message = getValues("message").trim();
    if (!cardName || !photoURL) {
      alert("카드 이름과 파일은 비울 수 없습니다.");
    } else {
      const newCard = {
        ...card,
        cardName,
        photoURL,
        message,
      };
      updateCard(newCard);
      onModalClose();
    }
  };

  const closeModal = () => {
    if (window.confirm("화면을 나가시겠습니까?") === true) {
      onModalClose();
    } else return null;
  };

  return (
    <S.EditCardForm onSubmit={handleSubmit(onValid)}>
      <S.Content>
        <S.ImgContainer onClick={handlePhotoRef}>
          <S.Overlay>
            <div>Change File</div>
          </S.Overlay>
          <img alt="" src={photoURL} />
          <input
            hidden
            ref={photoRef}
            type="file"
            accept="image/*"
            onChange={onPhotoCahnge}
          />
        </S.ImgContainer>
        <S.TextContainer>
          <div>
            <input
              {...cardNameRegister}
              type="text"
              placeholder="카드 이름"
              maxLength={15}
            />
            <span>최대 15글자</span>
          </div>
          <div>
            <textarea
              {...messageRegister}
              rows={1}
              placeholder="사진에 대해 설명하세요"
              maxLength={200}
            />
            <span>{textLength}/200</span>
          </div>
        </S.TextContainer>
      </S.Content>
      <S.ButtonContainer>
        <S.Button type="button" onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} />
        </S.Button>
        <S.Button type="submit">
          <FontAwesomeIcon icon={faCheck} />
        </S.Button>
      </S.ButtonContainer>
    </S.EditCardForm>
  );
};
export default Edit;
