import React, { useContext } from "react";

import { Helmet } from "react-helmet";

import { AuthContext } from "service/authContext";
import { useMyCardsQueryData } from "hooks/useQueryData";

import Profile from "./components/profile/profile";
import EmptyData from "components/emptyData";
import Loading from "components/loading";
import Preview from "../../components/preview";

const My = () => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo!.uid;

  const { isLoading, data } = useMyCardsQueryData(userUid);

  const emptyMessage = "내가 만든 카드가 여기에 보관됩니다.";

  return (
    <>
      <Helmet>
        <title>my</title>
      </Helmet>
      <Profile />

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

export default My;
