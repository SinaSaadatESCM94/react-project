import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./layout/layout";
import Login from "./page/login/login";
import SignUp from "./page/sign-up/signUp";
import BoardProject from "./page/designers-board-project/boardProject";
import NotFound from "./page/not-found";
import SlideShow from "./page/slide-show";
import Calculator from "./page/calculator";
import Presentation from "./page/presentation";
import TestCreateComponentBarnch from "./page/testCreateComponentBarnch";
function App() {
  return (
    <div className="App w-100">
      <BrowserRouter>
        <Routes>
          <Route
            path="/SinaSaadatESCM94/react-project.git"
            element={<Layout />}
          >
            <Route index path="" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="board" element={<BoardProject />} />
            <Route path="not-found" element={<NotFound />} />
            <Route path="slide-show" element={<SlideShow />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="presentation" element={<Presentation />} />
            <Route
              path="test-component"
              element={<TestCreateComponentBarnch />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
