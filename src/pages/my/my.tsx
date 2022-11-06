import React, { useState, useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "service/authContext";

import { SyncCards } from "service/card_repository";

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
  const [itemsPerPage, setItemsPerPage] = useState<number>(4);

  //페이지 수 구하기
  const pages = [];
  for (let i = 1; i <= Math.ceil(myCards.length / itemsPerPage); i++)
    pages.push(i);

  //여기서 만들어서 넘겨도 괜찮????
  //addCard하면 그 페이지로 이동
  const handleLastPage = () => {
    setCurrentPage(pages.length);
  };

  useEffect(() => {
    userInfo
      ? SyncCards(userUid, (dbCards: CardType[]) => {
          // let temp = []
          // Object.values(dbCards).map((data) => (
          //   temp.push(data)
          // ))
          // setCards(temp);
          if (!dbCards) return null;
          setMyCards(Object.values(dbCards).map((data) => data));
        })
      : navigate("/");
  }, [navigate, userInfo, userUid]);

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
        <CardForm
          myCards={myCards}
          setMyCards={setMyCards}
          closeCardAddModal={closeCardAddModal}
          handleLastPage={handleLastPage}
        />
      ) : (
        <button onClick={() => closeCardAddModal()}>Add</button>
      )}

      <Preview
        myCards={myCards}
        setMyCards={setMyCards}
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
