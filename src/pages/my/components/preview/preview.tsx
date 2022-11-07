import React from "react";

import { FbDeleteCard } from "service/card_repository";
import { FbDeleteImageFile } from "service/img_uploader";

import * as S from "./preview.styled";

import { CardType } from "pages/my";

interface PreviewProps {
  myCards: CardType[];
  userUid: string | undefined;
  currentPage: number;
  itemsPerPage: number;
}
const Preview = ({
  myCards,
  userUid,
  currentPage,
  itemsPerPage,
}: PreviewProps) => {
  //한 페이지에 들어갈 아이템 설정 (itemsPerPage의 갯수만큼)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = myCards.slice(indexOfFirstItem, indexOfLastItem);

  //여기 프로미스 사용해야 노란색 경고가 안뜬다는디
  //else null 오류뜸 와이!!!???!??!!?!!?!??!?!?!?!!?!?!?!??!
  const deleteCard = (cardId: number) => {
    if (window.confirm("삭제하시겠습니까?") === true) {
      FbDeleteCard(userUid, cardId);
      FbDeleteImageFile(cardId);
    }
  };

  return (
    <>
      <S.Gridbox>
        {currentItems.map((card: CardType) => (
          <S.Container key={card.id}>
            <S.CardImage alt="" src={card.fileURL}></S.CardImage>
            <S.CardDetail>
              <S.CardName>{card.fileName}</S.CardName>
              <S.CardDeleteButton onClick={() => deleteCard(card.id!)}>
                삭제
              </S.CardDeleteButton>
            </S.CardDetail>
          </S.Container>
        ))}
      </S.Gridbox>
    </>
  );
};

export default Preview;
