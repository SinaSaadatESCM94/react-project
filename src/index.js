import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./layout/layout";
import Login from "./page/login/login";
import SignUp from "./page/sign-up/signUp";
import BoardProject from "./page/designers-board-project/boardProject";
import TestCreateComponentBarnch from "./page/testCreateComponentBarnch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/SinaSaadatESCM94/react-project.git" element={<Layout />}>
        <Route index path="" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="board" element={<BoardProject />} />
        <Route path="test-component" element={<TestCreateComponentBarnch />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
