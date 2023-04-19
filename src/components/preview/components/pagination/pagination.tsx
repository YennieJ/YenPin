import React, { useState, useEffect } from "react";

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
  // 한번에 보여 질 페이지 갯수
  const pageNumberLimit: number = 5;
  const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(5);

  //페이지 디자인
  const renderPageNumber = pages.map((number: number) => {
    const pageNumber = [];

    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      pageNumber.push(
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
    return pageNumber;
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

  //카드 삭제 할때 페이지 변경
  useEffect(() => {
    if (pages.length !== 0) {
      for (let i = pages.length; i === currentPage - 1; i--) {
        setCurrentPage(i);
      }
    }
  }, [currentPage, pages.length, setCurrentPage]);

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
