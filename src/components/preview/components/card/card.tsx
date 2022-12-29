import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "service/authContext";

import { FbDeleteCard, FbDislike, FbLike } from "service/card_repository";
import { FbDeleteImageFile } from "service/img_uploader";

import BigCard from "../bigCard/bigCard";

import * as S from "./card.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence } from "framer-motion";

import { CardType, Type } from "types";
import { CountLikes, DeleteCard } from "service/card";

import styled from "styled-components";
import {
  arrayUnion,
  doc,
  getFirestore,
  setDoc,
  increment,
  arrayRemove,
} from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
const db = getFirestore();

interface Props {
  isActive?: boolean;
}
const LikeButton = styled.div<Props>`
  cursor: pointer;
  border: 5px solid ${(props) => (props.isActive ? "red" : "black")};
`;

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
  card: Type;
}
const Card = ({ card }: CardProps) => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;

  const { id, image, title, user, likeCount } = card;

  const [detailModal, setDetailModal] = useState<boolean>(false);
  const [detailCard, setDetailCard] = useState<Type>();

  const onBigCard = (card: Type) => {
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
      DeleteCard(cardId);
    } else return null;
  };

  const likeUid = card?.likeUids.includes(card.user);

  const queryClient = useQueryClient();
  const UpdateMutation = useMutation({
    mutationFn: (card: Type) => CountLikes(card),

    onSuccess: () => {
      // 요청이 성공한 경우
      queryClient.invalidateQueries(["myCards"]);
      queryClient.invalidateQueries(["allCards"]);
    },
  });

  const onLikes = () => {
    UpdateMutation.mutate(card);
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
        <img src={image} alt="" />
        <S.Info variants={infoVariants}>{title}</S.Info>
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
      <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
      {detailModal && detailCard && (
        <BigCard card={detailCard} onModalClose={() => onBigCard(card)} />
      )}

      <>
        <LikeButton onClick={onLikes} isActive={likeUid}>
          likes
        </LikeButton>
        <span>{card.likeCount}</span>
      </>
    </>
  );
};

export default Card;
