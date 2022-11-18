import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthSignOut } from "service/auth_service";

import * as S from "./sidebar.styled";

const Sidebar = () => {
  const navigate = useNavigate();

  const [onSidebar, setOnSidebar] = useState<boolean>(false);

  //로그아웃됐을때, 홈으로 돌아가기 위해서 navigate사용
  const handleLogout = () => {
    AuthSignOut();
    navigate("/");
  };
  return (
    <>
      <S.SidebarContainer>
        {onSidebar ? (
          <>
            <S.SidebarButton close onClick={() => setOnSidebar(false)}>
              &#10005;
            </S.SidebarButton>
            <S.SidebarBackground>
              <S.SidebarButton onClick={handleLogout}>로그아웃</S.SidebarButton>
              <S.SidebarButton onClick={handleLogout}>로그아웃</S.SidebarButton>
              <S.SidebarButton onClick={handleLogout}>로그아웃</S.SidebarButton>
            </S.SidebarBackground>
          </>
        ) : (
          <S.SidebarButton close font={45} onClick={() => setOnSidebar(true)}>
            &#8801;
          </S.SidebarButton>
        )}
      </S.SidebarContainer>
    </>
  );
};

export default Sidebar;
