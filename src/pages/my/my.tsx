import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "service/authContext";

import { FbGetMyCards } from "service/card_repository";

import CardAddForm from "./components/cardForm";
import Preview from "../../components/preview";

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
        <button onClick={() => handleCardModal()}>Add</button>
      ) : (
        <>
          <button onClick={() => handleCardModal()}>추가</button>
          <Preview
            cards={myCards}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
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
