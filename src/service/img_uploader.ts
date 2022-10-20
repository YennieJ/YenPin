class ImageUploader {
  async upload(file: any) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "dhrny6pt");
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dfqeczkvs/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;

// import { firebaseDatabase } from "./firebase";

// class CardRepository {
//   syncCards(userId, onUpdate) {
//     const ref = firebaseDatabase.ref(`${userId}/cards`);
//     ref.on("value", (snapshot) => {
//       const value = snapshot.val();
//       value && onUpdate(value);
//     });
//     return () => ref.off();
//   }
//   saveCard(userId, card) {
//     firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
//   }

//   removeCard(userId, card) {
//     firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
//   }
// }

// export default CardRepository;
