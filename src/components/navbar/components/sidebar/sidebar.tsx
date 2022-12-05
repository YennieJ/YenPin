import React, { useState } from "react";

import { AuthSignOut } from "service/auth_service";

import * as S from "./sidebar.styled";
import Burger from "./components/buger";

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleLogout = () => {
    AuthSignOut();
  };
  return (
    <>
      <Burger onClick={() => setOpen(!open)} open={open} />
      {open ? (
        <S.SidebarContents>
          <li onClick={handleLogout}>로그아웃</li>
          <li>로그아웃</li>
          <li>로그아웃</li>
          <li>로그아웃</li>
          <li>로그아웃</li>
        </S.SidebarContents>
      ) : null}
    </>
  );
};

export default Sidebar;
