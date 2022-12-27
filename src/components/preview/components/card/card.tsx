import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "service/authContext";

import { FbDeleteCard, FbDislike, FbLike } from "service/card_repository";
import { FbDeleteImageFile } from "service/img_uploader";

import BigCard from "../bigCard/bigCard";

import * as S from "./card.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence } from "framer-motion";

import { CardType } from "types";

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    //zindex 꼭 사용해야되는건가.. 왜때문이지
    zIndex: 9,
    scale: 1.3,
    transition: {
      delay: 0.5,
      duaration: 0.1,
      type: "tween",
    },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duaration: 0.1,
      type: "tween",
    },
  },
};

interface CardProps {
  card: CardType;
}
const Card = ({ card }: CardProps) => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;

  const { cardName, fileURL, message, id, user, likeCount, likeUid } = card;

  const [detailModal, setDetailModal] = useState<boolean>(false);
  const [detailCard, setDetailCard] = useState<CardType>();

  const onBigCard = (card: CardType) => {
    if (detailModal === false) {
      document.body.style.overflow = "hidden";
      setDetailCard(card);
      setDetailModal(true);
    } else {
      document.body.style.overflow = "auto";
      setDetailModal(false);
    }
  };

  //삭제
  const deleteCard = (cardId: number) => {
    if (window.confirm("삭제하시겠습니까?") === true) {
      FbDeleteCard(cardId);
      FbDeleteImageFile(cardId);
    } else return null;
  };
  const [temp, setTemp] = useState(false);

  const onClick = () => {
    //userUid가 있어야 작동하게 짜야돼
    if (likeUid?.includes(userUid)) {
      setTemp(true);
      FbDislike(card);
      console.log("들어있음");
    } else {
      FbLike(card);
      console.log("좋아요함");
    }
  };

  return (
    <>
      <S.Box
        key={id}
        layoutId={id + ""}
        variants={boxVariants}
        whileHover="hover"
        initial="normal"
        transition={{ type: "tween" }}
        onClick={() => onBigCard(card)}
      >
        <img src={fileURL} alt="" />
        <S.Info variants={infoVariants}>{cardName}</S.Info>
        {userUid === user && (
          <S.DeletButton
            variants={infoVariants}
            // e: React.MouseEvent
            onClick={(e) => {
              e.stopPropagation();
              deleteCard(id);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </S.DeletButton>
        )}
      </S.Box>
      <button onClick={onClick}>좋아요</button>
      <div style={temp ? { border: "1px solid green" } : { fontSize: "50px" }}>
        {likeCount}
      </div>

      {detailModal && detailCard && (
        <BigCard card={detailCard} onModalClose={() => onBigCard(card)} />
      )}
    </>
  );
};

export default Card;
