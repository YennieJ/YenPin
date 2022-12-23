import React, { useContext, useRef, useState } from "react";

import * as S from "./bigCard.styled";
import DialogBox from "components/dialogBox/dialogBox";

import { CardType } from "types";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from "react-query";
import { FbSaveCard } from "service/card_repository";
import { FbUploadImageFile } from "service/img_uploader";
import imageCompression from "browser-image-compression";
import { AuthContext } from "service/authContext";
import Detail from "./components/detail";
import Edit from "./components/edit";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

interface Props {
  card: CardType;
  onModalClose: () => void;
}

const BigCard = ({ card, onModalClose }: Props) => {
  const [editMode, setEditMode] = useState(false);

  const toggleEdit = () => {
    // e.preventDefault();
    setEditMode((prev) => !prev);
  };
  return (
    <DialogBox preview layoutId={card.id + ""}>
      {editMode ? (
        <Edit card={card} onModalClose={onModalClose} toggleEdit={toggleEdit} />
      ) : (
        <Detail
          card={card}
          onModalClose={onModalClose}
          onEditMode={toggleEdit}
        />
      )}
    </DialogBox>
  );
};

export default BigCard;
