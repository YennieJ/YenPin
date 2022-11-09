import React, { useState, useEffect } from "react";

import { FbDeleteCard } from "service/card_repository";
import { FbDeleteImageFile } from "service/img_uploader";

import Pagination from "../pagination";

import * as S from "./preview.styled";

import { CardType } from "pages/my";

interface PreviewProps {
  myCards: CardType[];
  userUid: string | undefined;
}

const Preview = ({ myCards, userUid }: PreviewProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 1;

  //페이지 수 구하기
  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(myCards.length / itemsPerPage); i++) {
    pages.push(i);
  }

  //한 페이지에 들어갈 아이템 설정 (itemsPerPage의 갯수만큼)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = myCards.slice(indexOfFirstItem, indexOfLastItem);

  //여기 프로미스 사용해야 노란색 경고가 안뜬다는디
  const deleteCard = (cardId: number) => {
    if (window.confirm("삭제하시겠습니까?") === true) {
      FbDeleteCard(userUid, cardId);
      FbDeleteImageFile(cardId);
    } else return null;
  };

  // 카드를 추가하거나 삭제해서 페이지가 바뀔 때 동작하는 코드
  // useEffect(() => {
  //   for (let i = pages.length; i > 1; i--) {
  //     console.log("gg");
  //   }
  // }, [pages.length]);
  // if (pages.length === pages.length - 1) {
  //   console.log("gg");
  // }
  // console.log(pages);

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
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />
    </>
  );
};

export default Preview;
