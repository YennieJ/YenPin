import React from "react";

import { useRecoilState } from "recoil";
import { isDarkAtom } from "style/atoms";

import styled from "styled-components";

export const ThemeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 15px;
  right: 20px;

  width: 160px;
  height: 50px;
  border-radius: 30px;
  font-size: 20px;
  background-color: ${(props) => props.theme.buttonTheme};

  div {
    display: flex;
    justify-content: space-around;
    align-items: baseline;

    width: 140px;
  }
  span {
    font-size: 15px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid red;
  color: ${(props) => props.theme.textColor};
`;
const Footer = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <>
      <Container>
        {" "}
        FOOTER인데 여기에 뭘 넣을지 아님 그냥 디자인할지 생각해봐
      </Container>
      <ThemeButton onClick={toggleTheme}>
        {isDark ? (
          <div>
            🌝
            <span>라이트 모드로 보기</span>
          </div>
        ) : (
          <div>
            🌚<span>다크 모드로 보기</span>
          </div>
        )}
      </ThemeButton>
    </>
  );
};

export default Footer;
