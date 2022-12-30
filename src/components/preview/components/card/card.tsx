import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "service/authContext";

import BigCard from "../bigCard/bigCard";

import * as S from "./card.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";

import { Type } from "types";
import { DeleteCard, GetKeppCard } from "service/card";

import { useKeepCardData, useLikeData } from "hooks/useQueryData";

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

  const { mutate: likeCard } = useLikeData();

  const onLikes = (e: React.MouseEvent) => {
    e.stopPropagation();
    likeCard(card);
  };

  // const { data } = useKeepCardData(user);
  // console.log(data);
  return (
    <>
      <S.Box
        key={id}
        layoutId={id + ""}
        variants={boxVariants}
        whileHover="hover"
        initial="normal"
        transition={{ type: "tween" }}
      >
        <img src={image} alt="" onClick={() => onBigCard(card)} />
        <S.Info variants={infoVariants}>
          <span>{title}</span>
          <div>
            <S.LikeButton
              variants={infoVariants}
              onClick={(e) => onLikes(e)}
              isActive={likeUid}
            >
              <FontAwesomeIcon icon={faHeart} />
            </S.LikeButton>
            <span>{likeCount}</span>
          </div>
        </S.Info>
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

      {detailModal && detailCard && (
        <BigCard card={detailCard} onModalClose={() => onBigCard(card)} />
      )}
    </>
  );
};

export default Card;
