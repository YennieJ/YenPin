import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "service/authContext";

import * as S from "./emptyData.styled";

interface Props {
  emptyMessage: string;
}
const EmptyData = ({ emptyMessage }: Props) => {
  const navigate = useNavigate();
  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;

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
    <S.CardContainer>
      <div>{emptyMessage}</div>
      <button onClick={onCreateCard}>새로운 카드 만들기</button>
    </S.CardContainer>
  );
};

export default EmptyData;
