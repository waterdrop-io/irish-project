import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import Instruments from "./pages/Instruments";
import Fiddle from "./pages/instruments/Fiddle";
import Harp from "./pages/instruments/Harp";
import IrishFlute from "./pages/instruments/IrishFlute";
import TinWhistle from "./pages/instruments/TinWhistle";
import UilleannPipe from "./pages/instruments/UilleannPipe";
import Bouzouki from "./pages/instruments/Bouzouki";


ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/instruments" element={<Instruments />} />
      <Route path="/bouzouki" element={<Bouzouki />} />
      <Route path="/fiddle" element={<Fiddle />} />
      <Route path="/harp" element={<Harp />} />
      <Route path="/flute" element={<IrishFlute />} />
      <Route path="/whistle" element={<TinWhistle />} />
      <Route path="/pipe" element={<UilleannPipe />} />
    </Routes>
  </HashRouter>
);
