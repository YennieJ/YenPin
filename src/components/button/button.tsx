import React from "react";
import * as S from "./button.styled";

export interface Props {
  children: string;
  handleClick?: () => void;
  handleSubmit?: React.MouseEventHandler<HTMLButtonElement>;
  nav?: boolean;
  Snav?: boolean;
  User?: boolean;
  X?: boolean;
  font?: number;
}

const Button = ({
  children,
  handleClick,
  handleSubmit,
  nav,
  Snav,
  User,
  X,
}: Props) => {
  return (
    <>
      {/* <S.basic font={font}>{children}</S.basic> */}

      {nav && <S.NavBtn onClick={handleClick}>{children}</S.NavBtn>}
      {Snav && <S.SnavBtn onClick={handleClick}>{children}</S.SnavBtn>}
      {User && <S.User onClick={handleSubmit}>{children}</S.User>}
      {X && (
        <S.X type="button" onClick={handleClick}>
          {children}
        </S.X>
      )}
    </>
  );
};

export default Button;
