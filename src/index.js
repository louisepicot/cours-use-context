import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ModalContextProvider } from "./context/modalContext";
import { UserContextProviderComposant } from "./context/userContext";







ReactDOM.render(
  <BrowserRouter>
    <UserContextProviderComposant >
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </UserContextProviderComposant>
  </BrowserRouter>,
  document.getElementById("root")
);
