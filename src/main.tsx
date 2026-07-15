import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrestigeArchive } from "./PrestigeArchive";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrestigeArchive />
  </StrictMode>,
);
