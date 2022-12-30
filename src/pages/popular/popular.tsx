import Preview from "components/preview";
import { usePopularCardData } from "hooks/useQueryData";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import * as S from "./popular.styled";

export interface Props {}

const Popular = ({}: Props) => {
  const { isLoading, data } = usePopularCardData();
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <>
      <Helmet>
        <title>POPULAR</title>
      </Helmet>
      {isLoading
        ? // <S.SpinnerContainer>
          //   <S.Spinner />
          // </S.SpinnerContainer>
          console.log("gg")
        : data && (
            <Preview
              cards={data}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
    </>
  );
};

export default Popular;
