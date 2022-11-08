import styled from "styled-components";

export const Gridbox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px 15px;
  place-items: center;

  height: 100%;

  padding: 30px 10px 60px 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 450px;
  height: 500px;
  border: none;
  border-radius: 20px;
  padding: 0;

  background-color: white;

  box-sizing: border-box;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
`;

export const CardImage = styled.img`
  width: 350px;
  height: 350px;
  border: 1px solid gray;
  border-radius: 20px;
  padding: 10px;
`;

export const CardDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 350px;
  padding-top: 30px;
`;
export const CardName = styled.div`
  width: 300px;

  font-size: 25px;
  text-align: center;
`;

export const CardDeleteButton = styled.button`
  width: 45px;
  height: 45px;
  padding: 0;
  margin-right: 5px;
  border: 1px solid gray;
  border-radius: 50%;
  cursor: pointer;

  background-color: #fff;
`;
