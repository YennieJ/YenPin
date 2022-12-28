import React, { useContext, useEffect, useState } from "react";
import { collection, query, getDocs, getFirestore } from "firebase/firestore";

import { AuthContext } from "service/authContext";
import NewCard from "./newCard";

const db = getFirestore();

export interface Type {
  id: number;
  image: string;
  message: string;
  title: string;
  user: string;
  likeCount: number;
  likeUids: string[];
}
const NewMy = () => {
  const [items, setItems] = useState<Type[]>();
  const getData = async () => {
    const q = query(collection(db, "cards"));

    const querySnapshot = await getDocs(q);
    // const time = querySnapshot.docs.map((doc) => doc.data().createdAt.toDate());
    const data = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
    if (!data) return null;
    setItems(data as Type[]);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {items?.map((item) => (
        <NewCard key={item.id} item={item} />
      ))}
    </>
  );
};

export default NewMy;
