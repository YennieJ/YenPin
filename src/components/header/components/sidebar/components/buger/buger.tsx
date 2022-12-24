import React from "react";
import { StyledBurger } from "./buger.styled";

interface BurgerProps {
  onClick: () => void;
  open: boolean;
}
const Burger = ({ onClick, open }: BurgerProps) => {
  return (
    <>
      <StyledBurger onClick={onClick} open={open}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  );
};

export default Burger;
