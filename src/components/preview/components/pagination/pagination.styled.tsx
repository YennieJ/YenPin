import styled from "styled-components";

export const Paginate = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 30px;

  width: 100%;
  height: 80px;
`;

export const PageButton = styled.button`
  width: 50px;
  height: 50px;

  padding: 10px;
  margin-right: 10px;

  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.contentBgColor};
  background-color: ${(props) => props.theme.contentBgColor};

  color: ${(props) => props.theme.textColor};

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
  &.active {
    background-color: ${(props) => props.theme.hoverColor};
  }
  &:disabled {
    color: gray;
    cursor: default;
    pointer-events: none;
  }
`;
