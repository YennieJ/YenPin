import React, { useContext } from "react";

import { AuthContext } from "service/authContext";
import { useMyCardsQueryData } from "hooks/useQueryData";

import Profile from "./components/profile/profile";
import Preview from "../../components/preview";
import Loading from "components/loading";

import { Helmet } from "react-helmet";
import EmptyData from "components/emptyData";

const My = () => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo!.uid;

  const { isLoading, data } = useMyCardsQueryData(userUid);
  // const { data } = useKeepCardData(userUid!);

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
