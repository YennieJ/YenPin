import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "service/authContext";

import { FbGetMyCards, FbDeleteCard } from "service/card_repository";
import { FbDeleteImageFile } from "service/img_uploader";

import Pagination from "../pagination";

import * as S from "./preview.styled";

export interface CardType {
  id: number | undefined;
  fileName: string | undefined;
  fileURL: string;
}

interface PreviewProps {
  goNewPage: () => number;
}

const itemsPerPage: number = 4;

const Preview = ({ goNewPage }: PreviewProps) => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;
  const navigate = useNavigate();

  const [myCards, setMyCards] = useState<CardType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  //한 페이지에 들어갈 아이템 설정 (itemsPerPage의 갯수만큼)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = myCards.slice(indexOfFirstItem, indexOfLastItem);

  //페이지 수 구하기
  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(myCards.length / itemsPerPage); i++) {
    pages.push(i);
  }

  useEffect(() => {
    userInfo
      ? FbGetMyCards(userUid, (dbCards: CardType[]) => {
          // let temp = []
          // Object.values(dbCards).map((data) => (
          //   temp.push(data)
          // ))
          // setMyCards(temp);
          if (!dbCards) return setMyCards([]);
          setMyCards(
            Object.values(dbCards)
              .reverse()
              .map((data) => data)
          );
        })
      : navigate("/");
  }, [navigate, userInfo, userUid]);

  //여기 프로미스 사용해야 노란색 경고가 안뜬다는디
  const deleteCard = (cardId: number) => {
    if (window.confirm("삭제하시겠습니까?") === true) {
      FbDeleteCard(userUid, cardId);
      FbDeleteImageFile(cardId);
    } else return null;
  };

  //카드 삭제 할때 페이지 변경
  if (pages.length !== 0) {
    for (let i = pages.length; i === currentPage - 1; i--) {
      setCurrentPage(i);
    }
  }

  //새로운 카드를 추가할때 첫 페이지로 가기위해서
  useEffect(() => {
    setCurrentPage(goNewPage);
  }, [goNewPage]);

  return (
    <>
      <S.Gridbox>
        {currentItems.map((card: CardType) => (
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
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />
    </>
  );
};

export default Preview;
