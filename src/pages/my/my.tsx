import React, { useState } from "react";
import { isTemplateLiteral } from "typescript";

import CardAddForm from "./components/cardForm";
import Preview from "./components/preview";

import * as S from "./my.styled";

// import {Props as MyProps} from '../my.tsx'

const My = () => {
  const [cardAddModal, setCardAddModal] = useState<boolean>(false);

  const handleCardModal = () => {
    if (cardAddModal === false) {
      document.body.style.overflow = "hidden";
      setCardAddModal(true);
    } else {
      document.body.style.overflow = "unset";
      setCardAddModal(false);
    }
  };

  //새로운 카드를 추가할때 첫 페이지로 가기위해서
  const setNewPage = () => {
    return 1;
  };

  return (
    <>
      {cardAddModal ? (
        <CardAddForm handleCardModal={handleCardModal} goNewCard={setNewPage} />
      ) : (
        <button onClick={() => handleCardModal()}>Add</button>
      )}
      <Preview goNewPage={setNewPage} />
    </>
  );
};

export default My;
