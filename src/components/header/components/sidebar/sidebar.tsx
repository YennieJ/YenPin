import React from "react";

import { useRecoilState } from "recoil";
import { onSidebarAtom } from "style/atoms";

import { AuthSignOut } from "service/auth_service";

import Burger from "./components/buger";

import * as S from "./sidebar.styled";

const Sidebar = () => {
  const [onSidebar, setOnSidebar] = useRecoilState(onSidebarAtom);

  const handleLogout = () => {
    AuthSignOut();
    setOnSidebar(!onSidebar);
  };

  return (
    <S.Container>
      <Burger onClick={() => setOnSidebar(!onSidebar)} open={onSidebar} />
      {onSidebar ? (
        <S.SidebarContents>
          <li onClick={handleLogout}>로그아웃</li>
          <li>로그아웃</li>
          <li>로그아웃</li>
          <li>로그아웃</li>
          <li>로그아웃</li>
        </S.SidebarContents>
      ) : null}
    </S.Container>
  );
};

export default Sidebar;
