import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BoardContextProvider } from "./assets/BoardContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BoardContextProvider>
      <App />
    </BoardContextProvider>
  </React.StrictMode>
);
