import Preview from "components/preview";
import React, { useState } from "react";
import { useLocation } from "react-router";

const Search = () => {
  const { state } = useLocation();

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
      {
        <Preview
          cards={state}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          handleCardModal={handleCardModal}
        />
      }
    </>
  );
};

export default Search;
