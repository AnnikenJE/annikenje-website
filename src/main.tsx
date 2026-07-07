import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import AppRouting from "./routing/AppRouting";
import { applyRandomAccent } from "./utils/accent";

// Re-skin the site with a fresh accent before the first paint.
applyRandomAccent();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouting />
  </StrictMode>
);
