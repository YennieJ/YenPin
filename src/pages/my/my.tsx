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

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  //for page limit
  const [pageNumberLimit, setPageNumberLimit] = useState<number>(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(5);

  //페이지 변경
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  //페이지 수 구하기
  const pages = [];
  for (let i = 1; i <= Math.ceil(myCards.length / itemsPerPage); i++)
    pages.push(i);
  const renderPageNumber = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <S.PageButton
          className={currentPage === number ? "active" : null}
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </S.PageButton>
      );
    } else {
      return null;
    }
  });

  //다음페이지
  const handleNextButton = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  //이전페이지
  const handlePrevButton = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  //addCard하면 그 페이지로 이동
  const handleLastPage = () => {
    setCurrentPage(pages.length);
  };

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

  //else null 오류뜸 와이!!!???!??!!?!!?!??!?!?!?!!?!?!?!??!
  const deleteCard = (id: number) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("삭제하시겠습니까?") === true) {
      const filteredCard = myCards.filter((card) => card.id !== id);
      setMyCards(filteredCard);
      DeleteCard(userUid, id);
      DeleteImageFile(id);
    }
  };

  //배경 컨트롤
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
          handleLastPage={handleLastPage}
        />
      ) : (
        <button onClick={() => setCardAddModal(!cardAddModal)}>Add</button>
      )}
      <S.Gridbox>
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
      </S.Gridbox>
      <S.Paginate>
        <S.PageButton
          onClick={handlePrevButton}
          disabled={currentPage === pages[0] ? true : false}
        >
          prev
        </S.PageButton>
        {renderPageNumber}
        <S.PageButton
          onClick={handleNextButton}
          disabled={currentPage === pages.length ? true : false}
        >
          next
        </S.PageButton>
      </S.Paginate>
    </>
  );
};

// export type {Props as MyProps};
export default My;
