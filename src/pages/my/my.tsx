import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "service/authContext";

import { FbGetMyCards } from "service/card_repository";

import CardAddForm from "./components/cardForm";
import Preview from "../../components/preview";

import * as S from "./my.styled";

import { CardType } from "types";

const My = () => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo!.uid;

  const [myCards, setMyCards] = useState<CardType[]>([]);
  const [cardAddModal, setCardAddModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    FbGetMyCards(userUid, (dbCards: CardType[]) => {
      if (!userUid) return console.log("my");
      if (!dbCards) return setMyCards([]);
      setMyCards(
        Object.values(dbCards)
          .reverse()
          .map((data) => data)
      );
    });
  }, [userInfo, userUid]);

  const handleCardModal = () => {
    if (cardAddModal === false) {
      document.body.style.overflow = "hidden";
      setCardAddModal(true);
    } else {
      document.body.style.overflow = "unset";
      setCardAddModal(false);
    }
  };

  return (
    <>
      {myCards.length === 0 ? (
        <S.Container>
          <div>내가 만든 카드가 여기에 보관됩니다.</div>
          <button onClick={() => handleCardModal()}>새로운 카드 만들기</button>
        </S.Container>
      ) : (
        <>
          <Preview
            cards={myCards}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            handleCardModal={handleCardModal}
          />
        </>
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
