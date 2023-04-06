import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Card from "./components/card";
import Pagination from "./components/pagination";

import * as S from "./preview.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { CardType } from "types";
import { useResetRecoilState } from "recoil";
import { onSidebarAtom } from "style/atoms";

interface PreviewProps {
  cards?: CardType[];
}
const itemsPerPage = 6;

const Preview = ({ cards }: PreviewProps) => {
  const closeSidebar = useResetRecoilState(onSidebarAtom);

  const { pathname } = useLocation();
  const myPage = pathname === "/my";

  const [currentPage, setCurrentPage] = useState<number>(1);

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
    <S.PreviewContainer myPage={myPage} onClick={closeSidebar}>
      <S.Content>
        {myPage && (
          <>
            <S.NewCardButton to="/my/create">
              <div>
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div>새로운 카드</div>
            </S.NewCardButton>
          </>
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

{
  /* <Link to="/my/created">생성됨</Link>
            <Link to="/my/saved">저장됨</Link>  */
}

// {PATH && handleCardModal && (
//   <>
//     <Link to="/my/saved">생성됨</Link> <h1>저장됨</h1>
//     <S.NewCardButton onClick={() => handleCardModal()}>
//       <div>
//         <FontAwesomeIcon icon={faPlus} />
//       </div>
//       <div>새로운 카드</div>
//     </S.NewCardButton>
//   </>
// )}
