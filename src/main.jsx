// scale root font-size based on monitor width
const screenWidth = window.screen.width;
// const screenWidth = window.screen.width;
// const scale = screenWidth < 2560 ? 0.8 : 1;

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

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <div id="app-wrapper" style={{ transform: `scale(${scale})` }}>
//         <App />
//       </div>
//     </BrowserRouter>
//   </StrictMode>
// );
