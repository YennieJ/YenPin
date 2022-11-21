import React from "react";

import Pagination from "./components/pagination";

import * as S from "./preview.styled";

import { CardType } from "types";
import Card from "./components/card";

interface PreviewProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  cards: CardType[];
  home?: string;
}

const itemsPerPage: number = 3;

const Preview = ({
  cards,
  currentPage,
  setCurrentPage,
  home,
}: PreviewProps) => {
  //한 페이지에 들어갈 아이템 설정 (itemsPerPage의 갯수만큼)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cards.slice(indexOfFirstItem, indexOfLastItem);

  //페이지 수 구하기
  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(cards.length / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <S.PreviewContainer>
      <S.Gridbox>
        {currentItems.map((card: CardType) => (
          <Card card={card} home={home} />
        ))}
      </S.Gridbox>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />
    </S.PreviewContainer>
  );
};

export default Preview;
