import React, { useState } from "react";

import { FbDeleteCard } from "service/card_repository";
import { FbDeleteImageFile } from "service/img_uploader";

import Pagination from "./components/pagination";
import Detail from "./components/detail";
import Edit from "./components/edit";

import * as S from "./preview.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import { CardType } from "types";

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
  //수정
  const [detailModal, setDetailModal] = useState<boolean>(false);
  const [detailCard, setDetailCard] = useState<CardType>();

  const [editModal, setEditModal] = useState<boolean>(false);

  //한 페이지에 들어갈 아이템 설정 (itemsPerPage의 갯수만큼)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cards.slice(indexOfFirstItem, indexOfLastItem);

  //페이지 수 구하기
  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(cards.length / itemsPerPage); i++) {
    pages.push(i);
  }

  //여기 프로미스 사용해야 노란색 경고가 안뜬다는디
  const deleteCard = (cardId: number) => {
    if (window.confirm("삭제하시겠습니까?") === true) {
      FbDeleteCard(cardId);
      FbDeleteImageFile(cardId);
    } else return null;
  };

  const onDetailModal = (card: CardType) => {
    if (detailModal === false) {
      document.body.style.overflow = "hidden";
      setDetailCard(card);
      setDetailModal(true);
    } else {
      document.body.style.overflow = "unset";
      setDetailModal(false);
    }
  };

  //수정
  const onEditModal = (card: CardType) => {
    if (editModal === false) {
      document.body.style.overflow = "hidden";
      setDetailCard(card);
      setEditModal(true);
    } else {
      document.body.style.overflow = "unset";
      setEditModal(false);
    }
  };

  return (
    <>
      <S.Gridbox>
        {currentItems.map((card: CardType) => (
          <S.Container key={card.id}>
            <S.Overlay>
              <button name="detail" onClick={() => onDetailModal(card)} />

              {!home && (
                <>
                  <button name="eidt" onClick={() => onEditModal(card)}>
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button name="delete" onClick={() => deleteCard(card.id!)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </>
              )}
            </S.Overlay>
            <S.CardImage alt="" src={card.fileURL}></S.CardImage>
            <S.CardName>{card.cardName}</S.CardName>
          </S.Container>
        ))}
      </S.Gridbox>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />
      {detailModal && detailCard && (
        <Detail card={detailCard} onModalClose={() => setDetailModal(false)} />
      )}
      {editModal && detailCard && (
        <Edit card={detailCard} onModalClose={() => setEditModal(false)} />
      )}
    </>
  );
};

export default Preview;
