import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ModalContextProvider } from "./context/modalContext";

ReactDOM.render(
  <BrowserRouter>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
