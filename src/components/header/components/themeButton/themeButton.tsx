import React from "react";

import { useRecoilState } from "recoil";
import { isDarkAtom } from "atoms";

import * as S from "./themeButton.styled";

const ThemeButton = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <>
      <S.Button onClick={toggleTheme}>
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
      </S.Button>
    </>
  );
};

export default ThemeButton;
