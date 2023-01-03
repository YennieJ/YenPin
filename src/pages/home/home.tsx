import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "service/authContext";

import { useAllCardsQueryData } from "hooks/useQueryData";

import Preview from "components/preview";
import Loading from "components/loading";

import { Helmet } from "react-helmet";
import EmptyData from "components/emptyData";

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
