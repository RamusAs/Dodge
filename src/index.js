import React from "react";
import ReactDOM from "react-dom/client";
import './styles/index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Homepage,DetailPage } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/:id" element={<DetailPage/>}/>
    </Routes>
  </BrowserRouter>,
);

reportWebVitals();