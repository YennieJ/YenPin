import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";

import { AuthContext } from "service/authContext";

import { useLikeMutationData } from "hooks/useQueryData";
import { FbDeleteCard } from "service/card_repository";

import BigCard from "../bigCard/bigCard";

import * as S from "./card.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";

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
  const navigate = useNavigate();

  const { id, image, title, user, likeCount } = card;

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
    } else return null;
  };

  const likeUid = card?.likeUids.includes(userUid!);

  const { mutate: likeCard } = useLikeMutationData(userUid!, card);

  const onLikes = () => {
    if (!userUid) {
      if (
        window.confirm("로그인이 필요합니다. 로그인 페이지로 이동할까요?") ===
        true
      ) {
        navigate("/welcome");
      }
    } else {
      likeCard();
    }
  };

  // const { data } = useKeepCardData(user);
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
          <S.IsActive isActive={likeUid}>
            <S.LikeButton variants={infoVariants} onClick={onLikes}>
              <FontAwesomeIcon icon={faHeart} />
            </S.LikeButton>
            <span>{likeCount}</span>
          </S.IsActive>
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
