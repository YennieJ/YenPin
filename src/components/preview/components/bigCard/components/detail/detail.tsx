import React, { useContext } from "react";

import { CardType } from "types";

import * as S from "./detail.styled";
import { AuthContext } from "service/authContext";

interface DetailProps {
  card: CardType;
  onModalClose: () => void;
  onEditMode: () => void;
}
const Detail = ({ card, onModalClose, onEditMode }: DetailProps) => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;
  const { cardName, photoURL, message, userUid: cardUid } = card;

  return (
    <>
      <S.CardForm>
        <S.Content>
          <S.ImgContainer>
            <img alt="" src={photoURL} />
          </S.ImgContainer>
          <S.TextContainer>
            <div>{cardName}</div>
            {message && <pre>{message}</pre>}
          </S.TextContainer>
        </S.Content>
        <S.ButtonContainer>
          <S.Button type="button" onClick={onModalClose}>
            뒤로
          </S.Button>
          {userUid === cardUid && (
            <S.Button type="button" onClick={onEditMode}>
              수정
            </S.Button>
          )}
        </S.ButtonContainer>
      </S.CardForm>
    </>
  );
};
export default Detail;
