import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProviderComponent } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProviderComponent>
      <App />
    </ThemeProviderComponent>
  </BrowserRouter>
);
