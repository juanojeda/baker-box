import React from "react";
import ReactDOM from "react-dom/client";
import RecipeList from "./RecipeList";
import reportWebVitals from "./reportWebVitals";

const DOMRoot = document.getElementById("root");

if (DOMRoot) {
  const root = ReactDOM.createRoot(DOMRoot);
  root.render(
    <React.StrictMode>
      <RecipeList />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
