import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

interface LinkBoxProps {
  home?: string;
  isActive?: boolean;
}

export const LinkBox = styled.span<LinkBoxProps>`
  display: flex;
  align-items: center;
  height: 50px;

  margin-right: 5px;

  border-radius: 20px;
  background-color: ${(props) =>
    props.isActive ? props.theme.textColor : props.theme.bgColor};

  a {
    padding: 0 10px;

    color: ${(props) =>
      props.isActive ? props.theme.bgColor : props.theme.textColor};
    font-size: ${(props) => (props.home ? "40px" : "28px")};
  }
`;
