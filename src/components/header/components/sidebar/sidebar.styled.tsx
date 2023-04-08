import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;

  overflow-x: hidden;
`;

export const SidebarContents = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  position: absolute;
  top: 60px;
  right: 8px;

  width: 200px;
  height: 400px;

  border-radius: 20px;
  background-color: ${(props) => props.theme.contentBgColor};

  z-index: 10;

  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);

  li {
    width: 100%;

    padding: 15px;

    border-bottom: 1px solid gray;

    color: ${(props) => props.theme.textColor};
    font-size: 24px;

    text-align: center;

    cursor: pointer;

    :hover {
      &:nth-child(1) {
        border-radius: 20px 20px 0 0;
      }
      background-color: ${(props) => props.theme.hoverColor};
    }
  }
`;
