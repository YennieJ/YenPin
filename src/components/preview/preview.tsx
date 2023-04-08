import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { useResetRecoilState } from "recoil";
import Card from "./components/card";
import Pagination from "./components/pagination";

import { CardType } from "types";
import { onSidebarAtom } from "style/atoms";

import * as S from "./preview.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface PreviewProps {
  cards?: CardType[];
}
const itemsPerPage = 6;

// pages > home
// pages > my
// my 와 home의 차이는 새로운 카드 추가 버튼
const Preview = ({ cards }: PreviewProps) => {
  const { pathname } = useLocation();
  const myPage = pathname === "/my";

  const [currentPage, setCurrentPage] = useState<number>(1);

  const closeSidebar = useResetRecoilState(onSidebarAtom);

  //한 페이지에 들어갈 아이템(itemsPerPage의 갯수만큼)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cards!.slice(indexOfFirstItem, indexOfLastItem);

  //페이지 수 구하기
  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(cards!.length / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <S.PreviewContainer myPage={myPage} onClick={closeSidebar}>
      <S.Content>
        {myPage && (
          <S.NewCardButton to="/my/create">
            <div>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <div>새로운 카드</div>
          </S.NewCardButton>
        )}

        {currentItems.map((card: CardType) => (
          <Card key={card.id} card={card} />
        ))}
      </S.Content>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />
    </S.PreviewContainer>
  );
};

export default Preview;
