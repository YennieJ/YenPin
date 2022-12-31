import Loading from "components/loading";
import Preview from "components/preview";
import { usePopularCardsQueryData } from "hooks/useQueryData";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import * as S from "./popular.styled";

export interface Props {}

const Popular = ({}: Props) => {
  const { isLoading, data } = usePopularCardsQueryData();
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <>
      <Helmet>
        <title>POPULAR</title>
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        data && (
          <Preview
            cards={data}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )
      )}
    </>
  );
};

export default Popular;
