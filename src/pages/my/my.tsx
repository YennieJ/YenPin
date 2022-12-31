import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";

import { AuthContext } from "service/authContext";

import Profile from "./components/profile/profile";
import CreateCard from "./components/createCard";
import Preview from "../../components/preview";

import * as S from "./my.styled";

import { useMyCardsQueryData } from "hooks/useQueryData";
import Loading from "components/loading";

const My = () => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo!.uid;

  const { isLoading, data } = useMyCardsQueryData(userUid);

  const [cardAddModal, setCardAddModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

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
      <Helmet>
        <title>my</title>
      </Helmet>
      <Profile />

      {data?.length === 0 ? (
        <S.CardContainer>
          <div>내가 만든 카드가 여기에 보관됩니다.</div>
          <button onClick={() => handleCardModal()}>새로운 카드 만들기</button>
        </S.CardContainer>
      ) : isLoading ? (
        <Loading />
      ) : (
        <Preview
          cards={data}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          handleCardModal={handleCardModal}
        />
      )}

      {cardAddModal && (
        <CreateCard
          handleCardModal={handleCardModal}
          onCurrentPage={() => setCurrentPage(1)}
          userUid={userUid}
        />
      )}
    </>
  );
};

export default My;
