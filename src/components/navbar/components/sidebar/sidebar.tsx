import React, { useState } from "react";
import { signOut } from "@firebase/auth";
import { auth } from "service/firebase";

import * as S from "./sidebar.styled";

const Sidebar = () => {
  const [sidebarControl, setSidebarControl] = useState<boolean>(false);
  const handleLogout = () => {
    signOut(auth);
    window.location.reload();
  };
  return (
    <>
      <S.SidebarContainer>
        {sidebarControl ? (
          <>
            <S.SidebarButton
              close
              onClick={() => setSidebarControl(!sidebarControl)}
            >
              &#10005;
            </S.SidebarButton>
            <S.SidebarBackground>
              <S.SidebarButton onClick={() => console.log("gg")}>
                로그아웃
              </S.SidebarButton>
              <S.SidebarButton onClick={handleLogout}>로그아웃</S.SidebarButton>{" "}
              <S.SidebarButton onClick={handleLogout}>로그아웃</S.SidebarButton>
            </S.SidebarBackground>
          </>
        ) : (
          <S.SidebarButton
            close
            font={45}
            onClick={() => setSidebarControl(!sidebarControl)}
          >
            &#8801;
          </S.SidebarButton>
        )}
      </S.SidebarContainer>
    </>
  );
};

export default Sidebar;
