import styled, { css } from "styled-components";

export const Gridbox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;

  height: 100%;

  padding: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 450px;
  height: 500px;
  border: none;
  border-radius: 20px;
  padding: 0;
  margin: 15px;

  background-color: white;

  box-sizing: border-box;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
`;

export const CardImage = styled.img`
  width: 350px;
  height: 350px;
  border: 1px solid gray;
  border-radius: 20px;
  padding: 10px;
`;

export const CardDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 350px;
  padding-top: 30px;
`;
export const CardName = styled.div`
  width: 300px;

  font-size: 25px;
  text-align: center;
`;

export const CardDeleteButton = styled.button`
  width: 45px;
  height: 45px;
  padding: 0;
  margin-right: 5px;
  border: 1px solid gray;
  border-radius: 50%;
  cursor: pointer;

  background-color: #fff;
`;

export const Paginate = styled.li`
  display: flex;
  justify-content: center;
  list-style: none;

  height: 80px;
`;

interface PageButtonProps {
  className?: any;
}
export const PageButton = styled.button<PageButtonProps>`
  width: 50px;
  height: 50px;
  padding: 10px;
  margin: 8px;
  border-radius: 5px;
  border: 1px solid purple;
  color: purple;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: purple;
  }
  &.active {
    color: white;
    background-color: purple;
  }
  &:disabled {
    color: gray;
    border-color: gray;
  }
`;
