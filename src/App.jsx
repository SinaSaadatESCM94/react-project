import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./layout/layout";
import {
  Login,
  SignUp,
  BoardProject,
  NotFound,
  SlideShow,
  Calculator,
  TestCreateComponentBarnch,
  McuSlides,
} from "../src/page";
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
            <Route
              path="test-component"
              element={<TestCreateComponentBarnch />}
            />
            <Route path="marvel-cinematic-universe" element={<McuSlides />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
