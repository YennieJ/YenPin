import React from "react";
import * as S from "./detail.styled";

import PreviewDialog from "components/previewDialogBox/previewDialog";

interface Props {
  card: any;
  onModalClose: () => void;
}

const Detail = ({ card, onModalClose }: Props) => {
  return (
    <PreviewDialog>
      <S.CardForm>
        <S.Header>
          <S.ImgContainer>
            <img alt="" src={card.fileURL} />
          </S.ImgContainer>
          <S.DetailContainer>
            <S.TextContainer>
              <div>{card.cardName}</div>
              {card.message && <div>{card.message}</div>}
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
