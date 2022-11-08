import styled from "styled-components";

export const Paginate = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  height: 80px;
`;

export const PageButton = styled.button`
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid purple;
  margin-right: 10px;

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
    /* display: none; */
    color: gray;
    border-color: gray;
    cursor: default;
    pointer-events: none;
  }
`;
