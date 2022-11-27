import React, { useState, useContext, useEffect, useCallback } from "react";
import { AuthContext } from "service/authContext";

import { FbGetMyCards } from "service/card_repository";

import CardAddForm from "./components/cardForm";
import Preview from "../../components/preview";

import * as S from "./my.styled";

import { CardType } from "types";

const My = () => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo!.uid;

  const [loading, setLoading] = useState<boolean>(false);

  const [myCards, setMyCards] = useState<CardType[]>([]);
  const [cardAddModal, setCardAddModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const loadingCard = useCallback(async () => {
    await FbGetMyCards(userUid).then((card: unknown) => {
      const dbCard = Object.values(card as CardType)
        .reverse()
        .map((data) => data);
      setMyCards(dbCard);
    });
    setLoading(true);
  }, [userUid]);

  useEffect(() => {
    loadingCard();
  }, [loadingCard]);

  const handleCardModal = () => {
    if (cardAddModal === false) {
      document.body.style.overflow = "hidden";
      setCardAddModal(true);
    } else {
      document.body.style.overflow = "auto";
      setCardAddModal(false);
    }
  };

  return (
    <>
      {loading ? (
        myCards.length === 0 ? (
          <S.Container>
            <div>내가 만든 카드가 여기에 보관됩니다.</div>
            <button onClick={() => handleCardModal()}>
              새로운 카드 만들기
            </button>
          </S.Container>
        ) : (
          <Preview
            cards={myCards}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            handleCardModal={handleCardModal}
          />
        )
      ) : (
        <S.Spinner />
      )}

      {cardAddModal && (
        <CardAddForm
          handleCardModal={handleCardModal}
          onCurrentPage={() => setCurrentPage(1)}
          userUid={userUid}
        />
      )}
    </>
  );
};

export default My;
