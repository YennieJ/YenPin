import React, { useState } from "react";

import Detail from "./components/detail";
import Edit from "./components/edit";

import * as S from "./bigCard.styled";
import { CardType } from "types";

interface Props {
  card: CardType;
  onModalClose: () => void;
}

const BigCard = ({ card, onModalClose }: Props) => {
  const [editMode, setEditMode] = useState(false);

  const toggleEdit = () => {
    setEditMode((prev) => !prev);
  };
  return (
    <S.Backdrop>
      <S.DialogBox layoutId={card.id + ""}>
        {editMode ? (
          <Edit card={card} onModalClose={onModalClose} />
        ) : (
          <Detail
            card={card}
            onModalClose={onModalClose}
            onEditMode={toggleEdit}
          />
        )}
      </S.DialogBox>
    </S.Backdrop>
  );
};

export default BigCard;
