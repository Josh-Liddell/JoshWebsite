// scale root font-size based on monitor width
const screenWidth = window.screen.width;

if (screenWidth < 2560) {
  document.documentElement.style.fontSize = "80%";
} else {
  document.documentElement.style.fontSize = "100%";
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./scss/main.scss";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
