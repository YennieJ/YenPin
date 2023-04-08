import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";

import { AuthContext } from "service/authContext";

import { useLikeMutationData } from "hooks/useQueryData";
import { FbDeleteCard } from "service/card_repository";

import BigCard from "../bigCard/bigCard";

import { CardType } from "types";

import * as S from "./card.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";

interface ICard {
  card: CardType;
}

const Card = ({ card }: ICard) => {
  const { id, image, title, user, likeCount } = card;

  const navigate = useNavigate();

  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;

  const [detailModal, setDetailModal] = useState<boolean>(false);
  const [detailCard, setDetailCard] = useState<CardType>();

  const likeUid = card?.likeUids.includes(userUid!);
  const { mutate: likeCard } = useLikeMutationData(userUid!, card);

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

  // 좋아요
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

  return (
    <>
      <S.Box key={id} layoutId={id + ""}>
        <img src={image} alt="" onClick={() => onBigCard(card)} />
        <S.Info>
          <span>{title}</span>
          <S.LikeContainer isActive={likeUid}>
            <S.LikeButton onClick={onLikes}>
              <FontAwesomeIcon icon={faHeart} />
            </S.LikeButton>
            <span>{likeCount}</span>
          </S.LikeContainer>
        </S.Info>
        {userUid === user && (
          <S.DeletButton
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
