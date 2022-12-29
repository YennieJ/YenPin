import React, { useContext } from "react";

import { Type } from "types";

import * as S from "./detail.styled";
import { AuthContext } from "service/authContext";

interface DetailProps {
  card: Type;
  onModalClose: () => void;
  onEditMode: () => void;
}
const Detail = ({ card, onModalClose, onEditMode }: DetailProps) => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo!.uid;
  const { title, image, message, user } = card;

  return (
    <>
      <S.Div>
        <S.Content>
          <S.ImgContainer>
            <img alt="" src={image} />
          </S.ImgContainer>
          <S.TextContainer>
            <div>{title}</div>
            {message && <pre>{message}</pre>}
          </S.TextContainer>
        </S.Content>
        <S.ButtonContainer>
          <S.Button type="button" onClick={onModalClose}>
            뒤로
          </S.Button>
          {userUid === user && (
            <S.Button type="button" onClick={onEditMode}>
              수정
            </S.Button>
          )}
        </S.ButtonContainer>
      </S.Div>
    </>
  );
};
export default Detail;
