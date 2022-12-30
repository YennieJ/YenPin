import React, { useEffect } from "react";

import Pagination from "./components/pagination";
import Card from "./components/card";

import * as S from "./preview.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { CardType, Type } from "types";
import { GetKeppCard } from "service/card";
import { Link, useLocation } from "react-router-dom";

interface PreviewProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  cards?: Type[];
  PATH?: string;
  handleCardModal?: () => void;
}

const itemsPerPage: number = 3;

const Preview = ({
  cards,
  currentPage,
  setCurrentPage,
  PATH,
  handleCardModal,
}: PreviewProps) => {
  const { pathname } = useLocation();

  let temp = [];
  if (pathname === "/") {
    temp.push(cards);
  }

  console.log(temp);
  //한 페이지에 들어갈 아이템 설정 (itemsPerPage의 갯수만큼)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cards!.slice(indexOfFirstItem, indexOfLastItem);

  //페이지 수 구하기
  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(cards!.length / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <S.PreviewContainer PATH={PATH}>
      <S.Content>
        {PATH && handleCardModal && (
          <>
            <Link to="/my/saved">생성됨</Link> <h1>저장됨</h1>
            <S.NewCardButton onClick={() => handleCardModal()}>
              <div>
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div>새로운 카드</div>
            </S.NewCardButton>
          </>
        )}

        {currentItems.map((card: Type) => (
          <Card key={card.id} card={card} />
        ))}
      </S.Content>

      {/* <S.Footer> */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />
      {/* </S.Footer> */}
    </S.PreviewContainer>
  );
};

export default Preview;
