import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router";

import { useForm } from "react-hook-form";

import { AuthContext } from "service/authContext";
import { useCreateCardMutationData } from "hooks/useQueryData";
import { ImgConvert } from "hooks/img_uploader";
import DialogBox from "components/dialogBox/dialogBox";

import * as S from "./createCard.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

const CreateCard = () => {
  const navigate = useNavigate();
  const userInfo = useContext(AuthContext);
  const userUid = userInfo!.uid;

  const { mutate: createCard } = useCreateCardMutationData();

  const [textLength, setTextLength] = useState<number>(0);

  const [photoURL, setPhotoURL] = useState<string>("");

  const photoRef = useRef<HTMLInputElement>(null);

  //inputfile 대신 사진클릭
  const handlePhotoRef = () => {
    photoRef.current?.click();
  };

  //사진 컨버트
  const onPhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    ImgConvert(file, setPhotoURL);
  };

  const { register, getValues, handleSubmit } = useForm();

  const cardNameRegister = register("cardName");

  const messageRegister = register("message", {
    onChange: () => setTextLength(getValues("message").length),
  });

  const onValid = () => {
    const id = new Date().getTime();
    const cardName = getValues("cardName");
    const message = getValues("message").trim();
    if (!cardName || !photoURL) {
      alert("카드 이름과 파일은 비울 수 없습니다.");
    } else {
      const newCard = {
        id,
        userUid,
        photoURL,
        cardName,
        message,
        likeCount: 0,
        likeUids: [],
      };
      createCard(newCard);
      navigate("/my");
    }
  };

  return (
    <DialogBox>
      <S.CardForm onSubmit={handleSubmit(onValid)}>
        <S.Content>
          <S.ImgContainer onClick={handlePhotoRef} photoURL={photoURL}>
            <S.Overlay>
              <div>{photoURL ? "Change File" : "Add File"}</div>
            </S.Overlay>
            {photoURL && <img alt="" src={photoURL} />}
            <input
              hidden
              ref={photoRef}
              type="file"
              accept="image/*"
              onChange={onPhotoChange}
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
                rows={1}
                placeholder="사진에 대해 설명하세요"
                maxLength={200}
                {...messageRegister}
              />
              <span>{textLength}/200</span>
            </div>
          </S.TextContainer>
        </S.Content>
        <S.ButtonContainer>
          <S.Button type="button" onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faXmark} />
          </S.Button>
          <S.Button type="submit">
            <FontAwesomeIcon icon={faCheck} />
          </S.Button>
        </S.ButtonContainer>
      </S.CardForm>
    </DialogBox>
  );
};

export default CreateCard;
