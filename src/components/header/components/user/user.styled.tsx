import styled from "styled-components";

import { Link } from "react-router-dom";

export const LoginButton = styled(Link)`
  width: 100%;
  height: 100%;
  padding: 0 10px;

  border: none;
  border-radius: 20px;

  color: ${(props) => props.theme.textColor};
  font-size: 28px;

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;
