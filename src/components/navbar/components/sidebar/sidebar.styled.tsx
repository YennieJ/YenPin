import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SidebarContents = styled.ul`
  position: absolute;
  top: 50px;
  right: 8px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 200px;
  height: 400px;
  border-radius: 20px;
  padding: 10px;

  z-index: 10;
  background-color: ${(props) => props.theme.textColor};
  list-style: none;

  li {
    width: 100%;
    border-radius: 15px;
    padding: 10px;

    text-align: center;
    font-size: 24px;
    color: ${(props) => props.theme.bgColor};

    cursor: pointer;
    :hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }
`;
