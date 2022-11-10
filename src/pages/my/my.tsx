import React, { useState } from "react";

import CardAddForm from "./components/cardForm";
import Preview from "./components/preview";

import * as S from "./my.styled";

// import {Props as MyProps} from '../my.tsx'

const My = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

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

  return (
    <>
      {cardAddModal ? (
        <CardAddForm handleCardModal={handleCardModal} />
      ) : (
        <button onClick={() => handleCardModal()}>Add</button>
      )}
      <Preview />
    </>
  );
};

export default My;
