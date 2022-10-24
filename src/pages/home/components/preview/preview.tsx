import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "service/authContext";

import { getDatabase, ref, onValue } from "firebase/database";

import * as S from "./preview.styled";
import preview from ".";

export interface CardType {
  id: number;
  fileName?: string;
  fileURL: string;
}
const Preview = () => {
  // const { id, fileName, fileURL } = cards;

  return (
    <>
      <h1>preview</h1>

      {/* <img src={file}></img> */}
    </>
  );
};

export default Preview;
