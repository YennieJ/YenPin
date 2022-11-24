import React from "react";

import * as S from "./detail.styled";
import PreviewDialog from "components/previewDialogBox/previewDialog";

import { CardType } from "types";

interface Props {
  card: CardType;
  onModalClose: () => void;
}

const Detail = ({ card, onModalClose }: Props) => {
  const { cardName, fileURL, message } = card;

  return (
    <PreviewDialog>
      <S.CardForm>
        <S.Header>
          <S.ImgContainer>
            <img alt="" src={fileURL} />
          </S.ImgContainer>
          <S.DetailContainer>
            <S.TextContainer>
              <div>{cardName}</div>
              {message && <div>{message}</div>}
            </S.TextContainer>
          </S.DetailContainer>
        </S.Header>
        <S.ButtonContainer>
          <S.Button type="button" onClick={() => onModalClose()}>
            취소
          </S.Button>
          {/* <S.Button type="button" onClick={() => setEditModal(true)}>
            수정
          </S.Button> */}
        </S.ButtonContainer>
      </S.CardForm>
    </PreviewDialog>
  );
};

export default Detail;