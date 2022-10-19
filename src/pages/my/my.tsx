import React, { useRef, useState } from "react";
// import ImageUploader from "service/img_uploader";
import { firebaseDatabase } from "service/firebase";
import { getDatabase, ref, set } from "firebase/database";
import * as S from "./my.styled";

// import {Props as MyProps} from '../my.tsx'

export interface CardType {
  id: number;
  fileName?: string;
  fileURL?: string;
}
// 부모에서 상속받을떼???????????쓰는거래
// interface CardProps {
//   cards: CardType[];
// }

// function writeUserData(userId, name, email, imageUrl) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }

const sample = (card: any) => {
  const db = getDatabase();
  set(ref(db, "users/"), {
    card,
  });
};

const My = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [cards, setCards] = useState<CardType[]>([]);

  // const [file, setFile] = useState<string>()
  // const imgUploader = new ImageUploader();
  // const filehandler = async (event: any) => {
  //   const uploaded = await imgUploader.upload(event.target.files[0]);
  //   console.log(uploaded);
  //   setFile(uploaded.url);
  // };

  const addCard = (e: React.FormEvent) => {
    const card = {
      id: Date.now(),
      fileName: inputRef.current?.value,
      // fileURL: file,
    };
    e.preventDefault();
    setCards([...cards, card]);
    formRef.current?.reset();
    sample(card);
  };

  const deleteCard = (id: number) => {
    const filteredCard = cards.filter((card) => card.id !== id);
    setCards(filteredCard);
  };

  return (
    <>
      <S.Container>
        <form ref={formRef} onSubmit={addCard}>
          <input ref={inputRef} type="text" />
          {/* <input type="file" accept="image/*" onChange={filehandler} /> */}
          <button type="submit">등록</button>
        </form>
      </S.Container>

      {cards.map((card) => {
        return (
          <div key={card.id}>
            {card.fileName}
            <img src={card.fileURL}></img>
            <button onClick={() => deleteCard(card.id)}>삭제</button>
          </div>
        );
      })}
    </>
  );
};

// export type {Props as MyProps};
export default My;
