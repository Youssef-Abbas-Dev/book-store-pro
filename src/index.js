import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BookStoreProvider from "./context/BookStoreProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookStoreProvider>
      <App />
    </BookStoreProvider>
  </React.StrictMode>
);
