import { timeEnd } from "console";
import React, { useState } from "react";

import * as S from "./pagination.styled";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pages: number[];
}

const Pagination = ({
  currentPage,
  setCurrentPage,
  pages,
}: PaginationProps) => {
  //for page limit
  const pageNumberLimit: number = 5;
  const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(5);

  //페이지 갯수
  const renderPageNumber = pages.map((number: number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <S.PageButton
          className={currentPage === number ? "active" : undefined}
          key={number}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </S.PageButton>
      );
    } else if (number === currentPage && number === minPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
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

  return (
    <S.Paginate>
      <S.PageButton
        onClick={handlePrevButton}
        disabled={currentPage === pages[0] || pages.length === 0 ? true : false}
      >
        prev
      </S.PageButton>
      {renderPageNumber}
      <S.PageButton
        onClick={handleNextButton}
        disabled={
          currentPage === pages.length || pages.length === 0 ? true : false
        }
      >
        next
      </S.PageButton>
    </S.Paginate>
  );
};

export default Pagination;
