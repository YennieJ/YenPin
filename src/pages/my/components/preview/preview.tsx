import React from "react";

import { FbDeleteCard } from "service/card_repository";
import { FbDeleteImageFile } from "service/img_uploader";

import Pagination from "../pagination";

import * as S from "./preview.styled";

export interface CardType {
  id: number | undefined;
  fileName: string | undefined;
  fileURL: string;
  user: string | undefined;
}

interface PreviewProps {
  currentPage: number;
  setCurrentPage: any;
  myCards: any;
  main?: string;
}

const itemsPerPage: number = 4;

const Preview = ({
  myCards,
  currentPage,
  setCurrentPage,
  main,
}: PreviewProps) => {
  //한 페이지에 들어갈 아이템 설정 (itemsPerPage의 갯수만큼)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = myCards.slice(indexOfFirstItem, indexOfLastItem);

  //페이지 수 구하기
  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(myCards.length / itemsPerPage); i++) {
    pages.push(i);
  }

  //여기 프로미스 사용해야 노란색 경고가 안뜬다는디
  const deleteCard = (cardId: number) => {
    if (window.confirm("삭제하시겠습니까?") === true) {
      FbDeleteCard(cardId);
      FbDeleteImageFile(cardId);
    } else return null;
  };

  return (
    <>
      <S.Gridbox>
        {currentItems.map((card: CardType) => (
          <S.Container key={card.id}>
            <S.CardImage alt="" src={card.fileURL}></S.CardImage>
            <S.CardDetail>
              <S.CardName>{card.fileName}</S.CardName>
              {main ? null : (
                <S.CardDeleteButton onClick={() => deleteCard(card.id!)}>
                  삭제
                </S.CardDeleteButton>
              )}
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
