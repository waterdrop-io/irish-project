import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import Test from "./pages/Test";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/t" element={<Test />} />
    </Routes>
  </HashRouter>
);
