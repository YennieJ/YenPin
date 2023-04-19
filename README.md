# YenPin

> 개선 점 : 댓글 DB 구축

---

![react](https://img.shields.io/badge/-React-000000?logo=react&logoColor=61DAFB&style=for-the-badge)
![styledcomponents](https://img.shields.io/badge/-styledcomponents-000000?logo=styledcomponents&logoColor=DB7093&style=for-the-badge)
![typescript](https://img.shields.io/badge/-typescript-000000?logo=typescript&logoColor=3178C6&style=for-the-badge)

![axios](https://img.shields.io/badge/-axios-000000?logo=axios&logoColor=white&style=for-the-badge)
![reactrouter](https://img.shields.io/badge/-reactrouter-000000?logo=reactrouter&logoColor=FF4154&style=for-the-badge)
![reactquery](https://img.shields.io/badge/-reactquery-000000?logo=reactquery&logoColor=FF4154&style=for-the-badge)
![reacthookform](https://img.shields.io/badge/-reacthookform-000000?logo=reacthookform&logoColor=EC5990&style=for-the-badge)
![recoil](https://img.shields.io/badge/recoil-000000?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FscXVlXzEiIGRhdGEtbmFtZT0iQ2FscXVlIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI1NS4yMSA2MjMuOTEiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMDA3YWY0fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTc0LjYyIDI3Ny40NiAxLjI0LS4xMyAzNC43OC0zLjI4LTUzLjQ3LTU4LjY2QTk2LjQ3IDk2LjQ3IDAgMCAxIDMyIDE1MC4zSDNhMTI1LjMgMTI1LjMgMCAwIDAgMzIuOCA4NC41N1pNMTc3LjEzIDM0N2wtMzYgMy40IDUzLjMyIDU4LjUxQTk2LjQxIDk2LjQxIDAgMCAxIDIxOS42MyA0NzRoMjguOTJhMTI1LjI4IDEyNS4yOCAwIDAgMC0zMi43Ni04NC41N1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNTMuNjkgMjMxLjY4Yy02LjMzLTMxLjMtMzAuODktNTQuMDktNjIuNTctNTguMDdsLTYuMzUtLjc5YTQ5LjYxIDQ5LjYxIDAgMCAxLTQzLjM1LTQ5LjEzdi0yMGE1Mi43NSA1Mi43NSAwIDEgMC0yOC45MS0uMzZ2MjAuMzhhNzguNTYgNzguNTYgMCAwIDAgNjguNjUgNzcuODJsNi4zNi44YzIzLjI0IDIuOTIgMzQuNzggMjAgMzcuODMgMzUuMXMtLjkzIDM1LjMyLTIxLjIyIDQ3YTczLjgxIDczLjgxIDAgMCAxLTMwLjA2IDkuNjJsLTk1LjY2IDlhMTAyLjQ1IDEwMi40NSAwIDAgMC00MS44IDEzLjM4QzkgMzMyLjQ1LTQuODEgMzYzIDEuNTIgMzk0LjI5czMwLjg5IDU0LjA4IDYyLjU3IDU4LjA2bDYuMzUuOGE0OS42IDQ5LjYgMCAwIDEgNDMuMzUgNDkuMTJ2MThhNTIuNzUgNTIuNzUgMCAxIDAgMjguOTEuMjZ2LTE4LjI2YTc4LjU1IDc4LjU1IDAgMCAwLTY4LjY1LTc3LjgxbC02LjM2LS44Yy0yMy4yNC0yLjkyLTM0Ljc4LTIwLjA1LTM3LjgzLTM1LjExcy45My0zNS4zMiAyMS4yMi00N2E3My42OCA3My42OCAwIDAgMSAzMC4wNi05LjYzbDk1LjY2LTlhMTAyLjQ1IDEwMi40NSAwIDAgMCA0MS44LTEzLjM4YzI3LjY1LTE2LjAyIDQxLjQtNDYuNTQgMzUuMDktNzcuODZaIi8+PC9zdmc+)

![firebase](https://img.shields.io/badge/-firebase-ffffff?logo=firebase&logoColor=FFCA28&style=for-the-badge)
![likes](https://img.shields.io/badge/-좋아요-ffffff?&style=for-the-badge)
![Dark Mode](https://img.shields.io/badge/-DarkMode-ffffff?&style=for-the-badge)
![Pagination](https://img.shields.io/badge/-Pagination-ffffff?&style=for-the-badge)

---

## Firebase

> 인증 서비스, 데이터 베이스, 스토리지 등 서버 구축을 도와준다.

### React Query with Mutation

hooks > useQueryData.tsx

> mutation? insert, update, delete가 실행 되었을 때 api를 다시 불러오는 trigger 역할

```ts
import { useQuery, useQueryClient, useMutation } from "react-query";

// 기존 React Query 형식
export const useCardsQueryData = () => {
  return useQuery<CardType[]>("고유네임", "card_repository 함수 중 택 1");
};

// Mutation 형식
export const useMutationData = () => {
  const queryClient = useQueryClient();
  return useMutation((newCard: CardType) => "card_repository 함수 중 택 1", {
    onSuccess: () => {
      queryClient.invalidateQueries(["다시 실행해야하는 고유 네임"]);
    },
  });
};

// 사용 할때
  const { mutate } = useMutationData();

  const onSubmit = () => {
        mutate();
    }
  };

```

### 인증 서비스

service > auth_service.tsx

https://user-images.githubusercontent.com/108519185/233175121-57ce0a89-ed29-4f4a-8cd6-2652c94ded99.mp4

1. User + context

```ts
import { createContext, useState, useEffect } from "react";

import { auth } from "./firebase";
import { User } from "@firebase/auth";

type Props = {
  children: React.ReactNode;
};

const AuthContext = createContext<User | null>(null);

// firebase User로 로그인 여부 확인.
export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const userInfo = auth.onAuthStateChanged((fbUser) => {
      setUser(fbUser);
    });
    return userInfo;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

// App.tsx 최상위에 AuthProvider 감싸주기
```

- Router + ProtectRoute

```ts
// router > protectRoute.tsx

import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "service/authContext";

type Props = {
  children: JSX.Element;
};

// User 정보가 없으면 home으로 돌아간다.
const ProtectRoute = ({ children }: Props) => {
  const userInfo = useContext(AuthContext);

  if (!userInfo) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectRoute;

// router > router.tsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectRoute from "./protectRoute";

import Home from "pages/home/home";
import My from "pages/my";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="my"
          element={
            <ProtectRoute>
              <My />
            </ProtectRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
```

2.  Signup, Login, GoogleProvider, Signout

https://user-images.githubusercontent.com/108519185/233175022-f14ad741-7350-4168-8090-a9c803d11244.mp4

```ts
import { auth } from "./firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "@firebase/auth";

interface IAuth {
  email: string;
  password: string;
}

export const AuthSignUp = ({ email, password }: IAuth) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("SignUp");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const AuthLogIn = ({ email, password }: IAuth) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("Login");
    })
    .catch((e) => {
      console.log(error);
    });
};

export const GoogleProvider = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (!credential) return null;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const AuthSignOut = () => {
  signOut(auth);
};
```

### 스토리지

프로필 업데이트

https://user-images.githubusercontent.com/108519185/233175159-89ab30e3-6d91-48f5-8f78-04a587c90079.mp4

```ts
import { auth } from "./firebase";

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

interface ProfileProps {
  getName: string;
  photo?: File;
  userId: string;
}

export const UpdateProfile = async ({
  getName,
  photo,
  userId,
}: ProfileProps) => {
  const storage = getStorage();

  const fileRef = ref(storage, `profile/${userId}.png`);

  photo && (await uploadBytes(fileRef, photo));

  const URL = await getDownloadURL(fileRef);

  updateProfile(auth.currentUser!, {
    displayName: getName,
    photoURL: URL,
  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((error) => {
      console.log(error);
    });
};
```

### 데이터 베이스

service > card_repository.ts

> 구조 : cards > cardID > cardInfo & userUID

https://user-images.githubusercontent.com/108519185/233175232-894149e8-0bd5-4a7b-8698-80aae71a79a6.mp4

```ts
interface CardType {
  id: number;
  userUid: string;
  photoURL: string;
  cardName: string;
  message: string;
  likeCount: number;
  likeUids: string[];
  createdAt?: Date;
}
import {
  getFirestore,
  setDoc,
  doc,
  increment,
  arrayUnion,
  arrayRemove,
  getDocs,
  collection,
  query,
  deleteDoc,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

// create
export async function FbCreateCard(card: CardType) {
  await setDoc(doc(db, `/cards/${card.id}`), {
    cardInfo,
  });
}

// update
export async function FbUpdateCard(card: CardType) {
  await setDoc(
    doc(db, `/cards/${card.id}`),
    {
      changeThings,
    },
    { merge: true }
  );
}

// delete
export async function FbDeleteCard(cardId: number) {
  deleteDoc(doc(db, `/cards/${cardId}`));
}

// getCards
export async function FbGetCards(userUid: string) {
  // FbGetAllCards
  // 최근에 만들어진 순서대로
  const q = query(collection(db, "cards"), orderBy("createdAt", "desc"));
  // FbGetMyCards
  // 현재 로그인 되어있는 User 체크
  const q = query(
    collection(db, "cards"),
    orderBy("createdAt", "desc"),
    where("userUid", "==", userUid)
  );
  // FbGetPopularCards
  // 좋아요 수가 많은 순서대로
  const q = query(collection(db, "cards"), orderBy("likeCount", "desc"));

  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({ ...doc.data() }));

  return data as CardType[];
}
```

### 검색

https://user-images.githubusercontent.com/108519185/233175267-1904c294-4171-47aa-a6d5-b6ca0e710ed2.mp4

1. src > components > header > components > searchBar

```ts
  const onSubmit = async () => {
    if (keyword.length > 0) {
      const response = await FbGetAllCards();
      // 전체 카드에서 원하는 키워드 필터하기
      const searchValue = response.filter((card) =>
        card.cardName.includes("keyword")
      );
      navigate("/search", { state: { searchValue, "keyword" } });
    }
  };
```

2. pages > search

```ts
const location = useLocation();
const searchValue = location.state.searchValue;
const keyword = location.state.keyword;
```

## 좋아요

src > components > preview > card

https://user-images.githubusercontent.com/108519185/233175522-4d6d842a-a74e-40bc-9974-c76d3eff5468.mp4

```ts
const { mutate: likeCard } = useLikeMutationData(userUid!, card);

// 좋아요
const onLikes = () => {
  if (!userUid) {
    const checkLogin = window.confirm(
      "로그인이 필요합니다. 로그인 페이지로 이동할까요?"
    );
    if (checkLogin) {
      navigate("/welcome");
    }
  } else {
    likeCard();
  }
};
```

## DarkMode (Recoil + styled-components)

https://user-images.githubusercontent.com/108519185/233175288-6a8b3afe-b417-4642-8e96-ddccb0d66e54.mp4

1. Atom.ts

```ts
// recoil
import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});
```

2. theme.ts

```ts
// 사용 할 CSS
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  textColor: "#202020",
  bgColor: "#ffffff",

  contentBgColor: "#e9e9e9",
  hoverColor: "rgba(0, 0, 0, 0.3)",

  buttonTheme: "#f3f3f3",
};

export const darkTheme: DefaultTheme = {
  textColor: "#d9d9d9",
  bgColor: "#1e1f21",

  contentBgColor: "#2f3640",
  hoverColor: "rgba(225, 225, 225, 0.5)",

  buttonTheme: "#cdcdcd",
};
```

3. App.tsx

````ts
import { useRecoilValue } from "recoil";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "style/theme";
import { isDarkAtom } from "atoms";

const App = () => {
  const isDark = useRecoilValue(isDarkAtom);
  return (
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Components />
      </ThemeProvider>
  );
};

export default App;```
````

## Pagination

https://user-images.githubusercontent.com/108519185/233175321-49cfeedc-449e-4dbc-8b8a-ebf8bf116677.mp4

1. src > components > preview

```ts
import React, { useState } from "react";

import Pagination from "./components/pagination";

import { CardType } from "types";

interface PreviewProps {
  cards?: CardType[];
}

//한 페이지에 들어 갈 card 갯수
const cardsPerPage = 6;

// pages > home,popular,my
const Preview = ({ cards }: PreviewProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // currentPage에 따라 보여질 cards.slice
  const indexOfLastItem = currentPage * cardsPerPage;
  const indexOfFirstItem = indexOfLastItem - cardsPerPage;
  const currentItems = cards!.slice(indexOfFirstItem, indexOfLastItem);

  //페이지 수 구하기
  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(cards!.length / cardsPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      {currentItems.map((card: CardType) => (
        <Card key={card.id} card={card} />
      ))}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />
    </>
  );
};

export default Preview;
```

2. src > components > preview > componenets > pagination

```ts
import React, { useState, useEffect } from "react";

import * as S from "./pagination.styled";

// preview에서 받아오는 Props
interface IPagination {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  // 페이지 수
  pages: number[];
}

const Pagination = ({ currentPage, setCurrentPage, pages }: IPagination) => {
  // 한번에 보여 질 페이지 갯수
  const pageNumberLimit: number = 5;

  const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(5);

  //페이지 디자인 (ex, 1-5 or 6-10)
  const renderPageNumber = pages.map((number: number) => {
    const pageNumber = [];

    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      pageNumber.push(
        <S.PageButton
          className={currentPage === number ? "active" : undefined}
          key={number}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </S.PageButton>
      );
    } else if (number === currentPage && number === minPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
    return pageNumber;
  });

  //다음페이지
  const handleNextButton = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  //이전페이지
  const handlePrevButton = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  //카드 삭제 할때 페이지 변경
  useEffect(() => {
    if (pages.length !== 0) {
      for (let i = pages.length; i === currentPage - 1; i--) {
        setCurrentPage(i);
      }
    }
  }, [currentPage, pages.length, setCurrentPage]);

  return (
    <>
      <button
        onClick={handlePrevButton}
        disabled={currentPage === pages[0] || pages.length === 0 ? true : false}
      >
        prev
      </button>
      {renderPageNumber}
      <button
        onClick={handleNextButton}
        disabled={
          currentPage === pages.length || pages.length === 0 ? true : false
        }
      >
        next
      </button>
    </>
  );
};

export default Pagination;
```
