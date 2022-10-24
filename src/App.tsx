import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "service/auth_service";
import { auth } from "service/firebase";
import { User } from "@firebase/auth";

import Home from "./pages/home/home";
import Popular from "pages/popular";
import My from "pages/my";
import Nav from "components/navbar";

export interface Props {}

const App = ({}: Props) => {
  //이거 맘에안듬 , 걍프로바이더를 바꿔버릴까
  const [user, setUser] = useState<User | null>();
  auth.onAuthStateChanged((user) => setUser(user));

  return (
    <AuthProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="popular" element={<Popular />} />
          {user && <Route path="my" element={<My />} />}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
