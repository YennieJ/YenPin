import Loading from "components/loading";
import Preview from "components/preview";
import { usePopularCardsQueryData } from "hooks/useQueryData";
import React from "react";
import { Helmet } from "react-helmet";

const Popular = () => {
  const { isLoading, data } = usePopularCardsQueryData();

  return (
    <>
      <Helmet>
        <title>POPULAR</title>
      </Helmet>
      {isLoading ? <Loading /> : data && <Preview cards={data} />}
    </>
  );
};

export default Popular;
