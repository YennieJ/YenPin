import styled from "styled-components";

export const Container = styled.div`
  height: 260px;
  padding: 10px 0 20px 0;
  border-bottom: 1px groove gray;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  height: 100%;
  button {
    padding: 8px 16px;
    border: none;
    border-radius: 50px;

    font-size: 15px;
    background-color: #e6e6e6;

    cursor: pointer;
  }
`;

interface ImgStyleProps {
  editing: boolean;
}

export const ImgContainer = styled.div<ImgStyleProps>`
  width: 96px;
  height: 96px;
  img {
    width: 96px;
    height: 96px;
    border-radius: 50px;

    cursor: ${(props) => props.editing && " pointer"};
  }
`;

interface UserNameStyleProps {
  warningMsg: () => string;
}
export const UserNameEdit = styled.div<UserNameStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  height: 95px;
  padding: 10px 0 0 0;

  font-size: 40px;
  input {
    width: 250px;
    padding: 8px 16px;
    border: 1px solid gray;
    border-radius: 50px;
    border-color: ${(props) => props.warningMsg() && "#ff0000bb"};

    font-size: 25px;

    overflow: hidden;
  }
  span {
    padding: 10px 0;

    font-size: 14px;
    color: #ff0000bb;
  }
`;

export const DisplayName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  align-items: center;

  height: 95px;
  padding: 10px 0 0 0;

  span {
    &:nth-child(1) {
      font-size: 35px;
      font-weight: 600;
    }
    &:nth-child(2) {
      padding: 10px 0;
      font-size: 14px;
    }
  }
`;
