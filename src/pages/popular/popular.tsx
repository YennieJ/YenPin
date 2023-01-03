import React from "react";

import { usePopularCardsQueryData } from "hooks/useQueryData";

import Loading from "components/loading";
import Preview from "components/preview";

import { Helmet } from "react-helmet";
import EmptyData from "components/emptyData";

const Popular = () => {
  const { isLoading, data } = usePopularCardsQueryData();

  const emptyMessage = "첫 카드를 등록해보세요.";

  return (
    <>
      <Helmet>
        <title>POPULAR</title>
      </Helmet>

      {data?.length === 0 ? (
        <EmptyData emptyMessage={emptyMessage} />
      ) : isLoading ? (
        <Loading />
      ) : (
        <Preview cards={data} />
      )}
    </>
  );
};

export default Popular;
