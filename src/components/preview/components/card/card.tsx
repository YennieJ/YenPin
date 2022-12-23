import React, { useState } from "react";

import { FbDeleteCard } from "service/card_repository";
import { FbDeleteImageFile } from "service/img_uploader";

import * as S from "./card.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import { CardType } from "types";
import { PathMatch, useMatch, useNavigate } from "react-router";

import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";
import BigCard from "../bigCard/bigCard";

export const Box = styled(motion.div)`
  position: relative;
  background-position: center center;

  /*  */
  /* background-color: #fff;
  background-size: cover;
  background-position: center center; */
  /*  */
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around; */

  width: 280px;
  height: 330px;
  border: 1px solid ${(props) => props.theme.hoverColor};
  border-radius: 20px;

  background-color: ${(props) => props.theme.contentBgColor};
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;
export const Info = styled(motion.div)`
  padding: 20px;

  border-radius: 0 0 20px 20px;
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
  font-size: 18px;
  background-color: ${(props) => props.theme.contentBgColor};
`;
const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    zIndex: 99,
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
  home?: string;
}
const Card = ({ card, home }: CardProps) => {
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
    } else return null;
  };

  return (
    <AnimatePresence>
      <Box
        key={card.id}
        layoutId={card.id + ""}
        variants={boxVariants}
        whileHover="hover"
        initial="normal"
        transition={{ type: "tween" }}
        onClick={() => onDetailModal(card)}
      >
        <img src={card.fileURL} alt="" />
        <Info variants={infoVariants}>{card.cardName}</Info>
      </Box>

      {detailModal && detailCard && (
        <BigCard card={detailCard} onModalClose={() => onDetailModal(card)} />
      )}
    </AnimatePresence>
  );
};

export default Card;
