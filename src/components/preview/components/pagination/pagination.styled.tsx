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
  border: 1px solid ${(props) => props.theme.contentBgColor};
  margin-right: 10px;

  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.contentTxtColor};
    background-color: ${(props) => props.theme.contentHoverColor};
  }
  &.active {
    color: ${(props) => props.theme.contentTxtColor};
    background-color: ${(props) => props.theme.contentBgColor};
  }
  &:disabled {
    /* display: none; */
    color: gray;
    border-color: gray;
    cursor: default;
    pointer-events: none;
  }
`;
