import styled from "styled-components";

export const Paginate = styled.li`
  display: flex;
  justify-content: center;
  list-style: none;

  height: 80px;
`;

export const PageButton = styled.button`
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
