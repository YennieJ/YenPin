import React from "react";
import * as S from "./temp.styled";

interface Props {
  toggleTheme: () => void;
}
const Temp = ({ toggleTheme }: Props) => {
  return (
    <S.ToggleButton onClick={() => console.log("gg")}>
      <S.Swich></S.Swich>
      <S.Text>
        <S.Idk>A</S.Idk>
        <S.Idk>B</S.Idk>
      </S.Text>
    </S.ToggleButton>
  );
};

export default Temp;
