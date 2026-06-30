import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import AppRouting from "./routing/AppRouting";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouting />
  </StrictMode>
);
