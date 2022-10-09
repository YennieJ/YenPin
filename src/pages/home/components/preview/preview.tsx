import React from "react";
import * as S from "./preview.styled";
// 자식컴포넌트로 넘겨주기위해 export해 줍시다.
export interface CardType {
  id: number;
  fileName: string;
  fileURL: string;
}
type CardProps = {
  cards: CardType[];
};

const Preview = ({ cards }: CardProps) => {
  // const { id, fileName, fileURL } = cards;

  return (
    <>
      {cards.map((card) => (
        <li>
          <p>아이디: {card.id}</p>
          <p>파일네임: {card.fileName}</p>
          <p>파일유알엘: {card.fileURL}</p>
        </li>
      ))}
    </>
    // dhrny6pt
  );
};

export default Preview;

// const url = "https://api.cloudinary.com/v1_1/dfqeczkvs/image/upload";
// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const files = document.querySelector("[type=file]").files;
//   const formData = new FormData();

//   for (let i = 0; i < files.length; i++) {
//     let file = files[i];
//     formData.append("file", file);
//     formData.append("upload_preset", "dhrny6pt");

//     fetch(url, {
//       method: "POST",
//       body: formData
//     })
//       .then((response) => {
//         return response.text();
//       })
//       .then((data) => {
//         document.getElementById("data").innerHTML += data;
//       });
//   }
// });
