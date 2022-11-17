import React, { useState } from "react";

import { FbDeleteCard } from "service/card_repository";
import { FbDeleteImageFile } from "service/img_uploader";
import Edit from "../edit";

import Pagination from "../pagination";

import * as S from "./preview.styled";

export interface CardType {
  id: number | undefined;
  cardName: string | undefined;
  fileURL: string;
  message: string | undefined;
  user: string | undefined;
}

interface PreviewProps {
  currentPage: number;
  setCurrentPage: any;
  myCards: any;
  main?: string;
}

const itemsPerPage: number = 3;

const Preview = ({
  myCards,
  currentPage,
  setCurrentPage,
  main,
}: PreviewProps) => {
  const [editModal, setEditModal] = useState<boolean>(false);

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
              <S.CardName>{card.cardName}</S.CardName>
              {main ? null : (
                <>
                  {editModal ? (
                    <Edit card={card} setEditModal={setEditModal} />
                  ) : (
                    <button type="button" onClick={() => setEditModal(true)}>
                      수정
                    </button>
                  )}
                  <S.CardDeleteButton onClick={() => deleteCard(card.id!)}>
                    삭제
                  </S.CardDeleteButton>
                </>
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
