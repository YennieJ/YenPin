import styled from "styled-components";

export const SidebarContents = styled.ul`
  position: absolute;
  top: 50px;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 200px;
  height: 400px;
  padding: 0;
  margin: 0;

  z-index: 10;
  background-color: purple;
  list-style: none;

  li {
    width: 100%;
    padding: 10px;
    text-align: center;
    font-size: 24px;
    color: white;

    cursor: pointer;
    :hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;
