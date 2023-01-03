import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "service/authContext";

import * as S from "./emptyData.styled";
import { useResetRecoilState } from "recoil";
import { onSidebarAtom } from "style/atoms";

interface Props {
  emptyMessage: string;
}
const EmptyData = ({ emptyMessage }: Props) => {
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

// link는 클릭 시 바로 이동하는 로직 ex)상세페이지 a:외부프로젝트 link:프로젝트 내에서 페이지전환
// useNavigate는 함수로 페이지 전환시 조건이 만족했을때 처리해야하는 로직이 있는 경우
