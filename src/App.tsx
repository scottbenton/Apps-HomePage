import React from "react";
import ReactDOM from "react-dom/client";

import HomePage from "./HomePage";

const App = () => (
  <div className="flex flex-col min-h-lvh">
    <HomePage />
  </div>
);
ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
