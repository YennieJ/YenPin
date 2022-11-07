import React, { useState, useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "service/authContext";

import { FbGetMyCards } from "service/card_repository";

import CardForm from "./components/cardForm";
import Preview from "./components/preview";
import Pagination from "./components/pagination";

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

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 4;

  //페이지 수 구하기
  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(myCards.length / itemsPerPage); i++) {
    pages.push(i);
  }

  //카드를 추가하거나 삭제해서 페이지가 바뀔 때 동작하는 코드
  useEffect(() => {
    for (let i = 1; i <= pages.length; i++) {
      setCurrentPage(i);
    }
  }, [pages.length]);

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

  //cardAddmodal이랑 합치던가, true false 값으러로 넘기던가
  const closeCardAddModal = () => {
    setCardAddModal(!cardAddModal);
  };

  //card add form modal창 열렸을 때 배경 사용 못하게
  cardAddModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");

  return (
    <>
      {cardAddModal ? (
        <CardForm closeCardAddModal={closeCardAddModal} />
      ) : (
        <button onClick={() => closeCardAddModal()}>Add</button>
      )}

      <Preview
        myCards={myCards}
        userUid={userUid}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />
    </>
  );
};

// export type {Props as MyProps};
export default My;
