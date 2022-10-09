import React from "react";
import { CardType } from "../maker/maker";
import * as S from "./preview.styled";

type CardProps = {
  card: CardType;
};

const Preview = ({ card }: CardProps): React.ReactElement => {
  const { id, fileName, fileURL } = card;

  return (
    <li>
      <p>아이디: {id}</p>
      <p>파일네임: {fileName}</p>
      <p>파일유알엘: {fileURL}</p>
    </li>
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
