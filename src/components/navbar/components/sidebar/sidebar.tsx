import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthSignOut } from "service/auth_service";

import * as S from "./sidebar.styled";

const Sidebar = () => {
  const navigate = useNavigate();

  const [sidebarControl, setSidebarControl] = useState<boolean>(false);
  const handleLogout = () => {
    AuthSignOut();
    navigate("/");
    // window.location.reload();
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
