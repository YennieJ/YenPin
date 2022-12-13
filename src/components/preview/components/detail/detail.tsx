import React from "react";

import * as S from "./detail.styled";
import DialogBox from "components/dialogBox/dialogBox";

import { CardType } from "types";

interface Props {
  card: CardType;
  onModalClose: () => void;
}

const Detail = ({ card, onModalClose }: Props) => {
  const { cardName, fileURL, message } = card;

  return (
    <DialogBox preview>
      <S.CardForm>
        <S.Content>
          <S.ImgContainer>
            <img alt="" src={fileURL} />
          </S.ImgContainer>
          <S.TextContainer>
            <div>{cardName}</div>
            {message && <pre>{message}</pre>}
          </S.TextContainer>
        </S.Content>
        <S.ButtonContainer>
          <S.Button type="button" onClick={() => onModalClose()}>
            취소
          </S.Button>
        </S.ButtonContainer>
      </S.CardForm>
    </DialogBox>
  );
};

export default Detail;
