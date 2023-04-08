import styled from "styled-components";

export const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: space-around;

  width: 880px;
  height: 530px;

  padding: 20px;

  @media screen and (max-width: 880px) {
    width: 450px;
    height: 100%;

    padding-bottom: 30px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
  height: 370px;

  padding: 10px;

  @media screen and (max-width: 880px) {
    flex-direction: column;

    width: 450px;
    height: 100%;
  }
`;

export const ImgContainer = styled.div`
  align-self: center;

  position: relative;

  width: 350px;
  height: 350px;

  img {
    width: 348px;
    height: 348px;

    border: 1px solid #9e9e9e;
    border-radius: 10px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 400px;

  div {
    width: 400px;

    padding: 10px;

    border: none;
    border-bottom: 1px solid #9e9e9e;

    font-size: 28px;
    font-weight: 700;
    text-align: left;

    outline: none;
  }

  pre {
    height: 250px;

    border: 1px solid #9e9e9e;
    border-radius: 10px;

    padding: 10px;

    font-size: 23px;

    overflow: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 6px;
      background: rgba(0, 0, 0, 0.3);
    }
  }

  @media screen and (max-width: 880px) {
    align-items: center;

    width: 100%;

    padding: 10px;
    > div {
      width: 350px;

      margin-bottom: 15px;
    }
    > pre {
      width: 350px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;

  border: 2px solid ${(props) => props.theme.textColor};
  border-radius: 24px;
  background-color: ${(props) => props.theme.contentBgColor};

  color: ${(props) => props.theme.textColor};
  font-size: 33px;

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;
