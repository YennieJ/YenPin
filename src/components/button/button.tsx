import React, { Children } from "react";
import * as S from "./button.styled";

export interface Props {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <>
      <S.Button onClick={onClick}>{children}</S.Button>
    </>
  );
};
// function Button(props) {
//   return( <>

//   {props.type === "trashbin" && (
//     <S.Button
//       className="trashbin"
//       type="button"
//       onClick={props.handleClick}
//     >
//     </S.Button>
//   )}

//   <Button type="goToday" handleClick={goToday}>
//   </>)
// }

export default Button;
