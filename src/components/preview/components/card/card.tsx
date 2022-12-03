import React, { useState } from "react";

import { FbDeleteCard } from "service/card_repository";
import { FbDeleteImageFile } from "service/img_uploader";

import Detail from "../detail";
import Edit from "../edit";

import * as S from "./card.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import { CardType } from "types";

interface CardProps {
  card: CardType;
  home?: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const Card = ({ card, home, setLoading }: CardProps) => {
  //수정
  const [detailModal, setDetailModal] = useState<boolean>(false);
  const [detailCard, setDetailCard] = useState<CardType>();

  const [editModal, setEditModal] = useState<boolean>(false);

  const onDetailModal = (card: CardType) => {
    if (detailModal === false) {
      document.body.style.overflow = "hidden";
      setDetailCard(card);
      setDetailModal(true);
    } else {
      document.body.style.overflow = "auto";
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
      document.body.style.overflow = "auto";
      setEditModal(false);
    }
  };

  //삭제
  const deleteCard = (cardId: number) => {
    if (window.confirm("삭제하시겠습니까?") === true) {
      FbDeleteCard(cardId);
      FbDeleteImageFile(cardId);
      setLoading(false);
    } else return null;
  };

  return (
    <>
      <S.Container>
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
        {detailModal && detailCard && (
          <Detail card={detailCard} onModalClose={() => onDetailModal(card)} />
        )}
        {editModal && detailCard && (
          <Edit
            card={detailCard}
            setLoading={setLoading}
            onModalClose={() => onEditModal(card)}
          />
        )}
      </S.Container>
    </>
  );
};

export default Card;
