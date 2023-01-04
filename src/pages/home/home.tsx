import React, { useContext } from "react";

import { AuthContext } from "service/authContext";

import { useAllCardsQueryData } from "hooks/useQueryData";

import Preview from "components/preview";
import Loading from "components/loading";
import EmptyData from "components/emptyData";

import { Helmet } from "react-helmet";

const Home = () => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;
  const { isLoading, data } = useAllCardsQueryData();

  const emptyMessage = "첫 카드를 등록해보세요.";
  return (
    <>
      <Helmet>
        <title>HOME</title>
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

export default Home;
