import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  width: 80px;
`;

export const SidebarContents = styled.ul`
  position: absolute;
  top: 60px;
  right: 8px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 200px;
  height: 400px;
  border-radius: 20px;

  z-index: 10;
  background-color: ${(props) => props.theme.contentBgColor};
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);

  list-style: none;

  li {
    width: 100%;
    border-bottom: 1px solid gray;
    padding: 15px;

    text-align: center;
    font-size: 24px;
    color: ${(props) => props.theme.textColor};

    cursor: pointer;
    :hover {
      &:nth-child(1) {
        border-radius: 20px 20px 0 0;
      }
      background-color: ${(props) => props.theme.hoverColor};
    }
  }
`;
