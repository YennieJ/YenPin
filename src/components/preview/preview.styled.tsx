import styled from "styled-components";

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;
export const Gridbox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;

  height: 80%;
  padding: 30px 30px 60px 30px;
`;
