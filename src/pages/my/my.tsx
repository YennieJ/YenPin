import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "service/authContext";
import { useMyCardsQueryData } from "hooks/useQueryData";

import Profile from "./components/profile/profile";
import Preview from "../../components/preview";
import Loading from "components/loading";

import * as S from "./my.styled";
import { Helmet } from "react-helmet";

const My = () => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo!.uid;

  const { isLoading, data } = useMyCardsQueryData(userUid);

  return (
    <>
      <Helmet>
        <title>my</title>
      </Helmet>
      <Profile />

      {data?.length === 0 ? (
        <S.CardContainer>
          <div>내가 만든 카드가 여기에 보관됩니다.</div>
          <Link to="/my/create">새로운 카드 만들기</Link>
        </S.CardContainer>
      ) : isLoading ? (
        <Loading />
      ) : (
        <Preview cards={data} />
      )}
    </>
  );
};

export default My;
