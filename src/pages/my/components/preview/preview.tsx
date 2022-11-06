import React from "react";

import { DeleteCard } from "service/card_repository";
import { DeleteImageFile } from "service/img_uploader";

import * as S from "./preview.styled";

import { CardType } from "pages/my/my";

interface PreviewProps {
  myCards: CardType[];
  setMyCards: React.Dispatch<React.SetStateAction<CardType[]>>;
  userUid: string | undefined;
  currentPage: number;
  itemsPerPage: number;
}
const Preview = ({
  myCards,
  setMyCards,
  userUid,
  currentPage,
  itemsPerPage,
}: PreviewProps) => {
  //한 페이지에 들어갈 아이템 설정 (itemsPerPage의 갯수만큼)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = myCards.slice(indexOfFirstItem, indexOfLastItem);

  //else null 오류뜸 와이!!!???!??!!?!!?!??!?!?!?!!?!?!?!??!
  const deleteCard = (cardId: number) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("삭제하시겠습니까?") === true) {
      const filteredCard = myCards.filter(
        (card: CardType) => card.id !== cardId
      );
      setMyCards(filteredCard);
      DeleteCard(userUid, cardId);
      DeleteImageFile(cardId);
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
