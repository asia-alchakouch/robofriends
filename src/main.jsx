import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./containers/App.jsx";
import "tachyons";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
