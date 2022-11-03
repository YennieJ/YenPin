import React, { useState, useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "service/authContext";

import { SyncCards, DeleteCard } from "service/card_repository";
import { DeleteImageFile } from "service/img_uploader";

import CardForm from "./components/cardForm";

import * as S from "./my.styled";

// import {Props as MyProps} from '../my.tsx'
export interface CardType {
  id: number | undefined;
  fileName?: string;
  fileURL: string;
}
// 부모에서 상속받을떼???????????쓰는거래
// interface CardProps {
//   cards: CardType[];
// }

const My = () => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;
  const navigate = useNavigate();

  const [myCards, setMyCards] = useState<CardType[]>([]);
  const [cardAddModal, setCardAddModal] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  //페이지 변경
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  //페이지 수 구하기
  const pages = [];
  for (let i = 1; i < Math.ceil(myCards.length / itemsPerPage); i++)
    pages.push(i);
  const pageNumber = pages.map((number) => {
    return (
      <li key={number} onClick={() => paginate(number)}>
        {number}
      </li>
    );
  });

  //한 페이지에 들어갈 아이템 설정 (itemsPerPage의 갯수만큼)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = myCards.slice(indexOfFirstItem, indexOfLastItem);

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

  //promise 이용해서 addCard가 될때 사진 파일이 업로드 된다면, id는 안받아도돼
  const closeCardAddModal = (id: number) => {
    setCardAddModal(!cardAddModal);
    // id && DeleteImageFile(id);
  };

  const deleteCard = (id: number) => {
    const filteredCard = myCards.filter((card) => card.id !== id);
    setMyCards(filteredCard);
    DeleteCard(userUid, id);
    DeleteImageFile(id);
  };

  cardAddModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");

  return (
    <>
      {cardAddModal ? (
        <CardForm
          cards={myCards}
          setCards={setMyCards}
          closeCardAddModal={closeCardAddModal}
        />
      ) : (
        <button onClick={() => setCardAddModal(!cardAddModal)}>Add</button>
      )}
      {pageNumber}
      {currentItems.map((card) => (
        <S.Container key={card.id}>
          <S.CardImage alt="" src={card.fileURL}></S.CardImage>
          <S.CardDetail>
            <S.CardName>{card.fileName}</S.CardName>
            <S.CardDeleteButton onClick={() => deleteCard(card.id!)}>
              삭제
            </S.CardDeleteButton>
          </S.CardDetail>
        </S.Container>
      ))}
    </>
  );
};

// export type {Props as MyProps};
export default My;
