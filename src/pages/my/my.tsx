import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "service/authContext";

import { FbGetMyCards } from "service/card_repository";

import CardAddForm from "./components/cardForm";

import Preview, { CardType } from "../../components/preview";
const My = () => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;
  const navigate = useNavigate();

  const [myCards, setMyCards] = useState<CardType[]>([]);
  const [cardAddModal, setCardAddModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    userInfo
      ? FbGetMyCards(userUid, (dbCards: CardType[]) => {
          if (!dbCards) return setMyCards([]);
          setMyCards(
            Object.values(dbCards)
              .reverse()
              .map((data) => data)
          );
        })
      : navigate("/");
  }, [navigate, userInfo, userUid]);

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
