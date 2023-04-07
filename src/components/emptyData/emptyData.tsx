import React, { useContext } from "react";
import { useNavigate } from "react-router";

import { AuthContext } from "service/authContext";
import { useResetRecoilState } from "recoil";
import { onSidebarAtom } from "style/atoms";

import * as S from "./emptyData.styled";

interface IEmptyData {
  emptyMessage: string;
}

// firbase DB에  data가 아무것도 없는 경우, user가 있을때와 없을때를 구분해서 페이지 이동
// pages > home
// pages > my

const EmptyData = ({ emptyMessage }: IEmptyData) => {
  const navigate = useNavigate();

  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;

  const closeSidebar = useResetRecoilState(onSidebarAtom);

  const onCreateCard = () => {
    if (!userUid) {
      if (
        window.confirm("로그인이 필요합니다. 로그인 페이지로 이동할까요?") ===
        true
      ) {
        navigate("/welcome");
      }
    } else {
      navigate("/my/create");
    }
  };

  return (
    <S.CardContainer onClick={closeSidebar}>
      <div>{emptyMessage}</div>
      <button onClick={onCreateCard}>새로운 카드 만들기</button>
    </S.CardContainer>
  );
};

export default EmptyData;
