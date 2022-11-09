import React, { useState, useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "service/authContext";

import { FbGetMyCards } from "service/card_repository";

import CardAddForm from "./components/cardForm";
import Preview from "./components/preview";

import * as S from "./my.styled";

// import {Props as MyProps} from '../my.tsx'
export interface CardType {
  id: number | undefined;
  fileName: string | undefined;
  fileURL: string;
}

const My = () => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;
  const navigate = useNavigate();

  const [myCards, setMyCards] = useState<CardType[]>([]);
  const [cardAddModal, setCardAddModal] = useState<boolean>(false);

  //카드를 추가하거나 삭제해서 페이지가 바뀔 때 동작하는 코드
  // useEffect(() => {
  //   for (let i = 1; i <= pages.length; i++) {
  //     setCurrentPage(i);
  //   }
  // }, [pages.length]);

  useEffect(() => {
    userInfo
      ? FbGetMyCards(userUid, (dbCards: CardType[]) => {
          // let temp = []
          // Object.values(dbCards).map((data) => (
          //   temp.push(data)
          // ))
          // setMyCards(temp);
          if (!dbCards) return null;
          setMyCards(Object.values(dbCards).map((data) => data));
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
      {cardAddModal ? (
        <CardAddForm handleCardModal={handleCardModal} />
      ) : (
        <button onClick={() => handleCardModal()}>Add</button>
      )}

      <Preview myCards={myCards} userUid={userUid} />
    </>
  );
};

export default My;
