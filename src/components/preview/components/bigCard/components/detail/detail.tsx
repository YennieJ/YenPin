import React, { useContext } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { CardType } from "types";

import * as S from "./detail.styled";
import { AuthContext } from "service/authContext";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const BigMovie = styled(motion.div)`
  position: fixed;
  width: 880px;
  height: 530px;
  top: 50px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  background-color: #fff;
`;

export const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: space-around;

  width: 100%;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
  height: 370px;

  padding: 10px;
`;

export const ImgContainer = styled.div`
  position: relative;
  align-self: center;

  width: 350px;
  height: 350px;
  img {
    width: 350px;
    height: 350px;
    border: 1px solid gray;
    border-radius: 20px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 400px;

  div {
    width: 400px;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    padding: 10px;
    margin: 20px 0;

    height: 60px;

    font-size: 28px;
    font-weight: 700;
    text-align: left;
    outline: none;
  }

  pre {
    border: 1px solid #9e9e9e;
    border-radius: 10px;
    padding: 10px;

    height: 200px;

    font-size: 20px;

    overflow: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 6px;
    }
  }
`;

interface DetailProps {
  card: CardType;
  onModalClose: () => void;
  onEditMode: () => void;
}
const Detail = ({ card, onModalClose, onEditMode }: DetailProps) => {
  const userInfo = useContext(AuthContext);
  const userUid = userInfo!.uid;
  const { cardName, fileURL, message, user } = card;

  return (
    <>
      <S.Div>
        <S.Content>
          <S.ImgContainer>
            <img alt="" src={fileURL} />
          </S.ImgContainer>
          <S.TextContainer>
            <div>{cardName}</div>
            {message && <pre>{message}</pre>}
          </S.TextContainer>
        </S.Content>
        <S.ButtonContainer>
          <S.Button type="button" onClick={onModalClose}>
            뒤로
          </S.Button>
          {userUid === user && (
            <S.Button type="button" onClick={onEditMode}>
              수정
            </S.Button>
          )}
        </S.ButtonContainer>
      </S.Div>
    </>
  );
};
export default Detail;
