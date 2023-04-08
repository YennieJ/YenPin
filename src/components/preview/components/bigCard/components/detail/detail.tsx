import React, { useContext } from "react";

import { AuthContext } from "service/authContext";

import { CardType } from "types";

import * as S from "./detail.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons";

interface IDetail {
  card: CardType;
  onModalClose: () => void;
  onEditMode: () => void;
}

const Detail = ({ card, onModalClose, onEditMode }: IDetail) => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;

  const { cardName, photoURL, message, userUid: cardUid } = card;

  return (
    <S.DetailContainer>
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
          <FontAwesomeIcon icon={faXmark} />
        </S.Button>
        {userUid === cardUid && (
          <S.Button type="button" onClick={onEditMode}>
            <FontAwesomeIcon icon={faPen} />
          </S.Button>
        )}
      </S.ButtonContainer>
    </S.DetailContainer>
  );
};
export default Detail;
