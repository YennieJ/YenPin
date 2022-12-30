import React, { useState } from "react";

import DialogBox from "components/dialogBox/dialogBox";

import { Type } from "types";

import styled from "styled-components";
import { motion } from "framer-motion";

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
  card: Type;
  onModalClose: () => void;
}

const BigCard = ({ card, onModalClose }: Props) => {
  const [editMode, setEditMode] = useState(false);

  const toggleEdit = () => {
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
