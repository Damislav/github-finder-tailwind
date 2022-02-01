import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GithubProvider>
        <AlertProvider>
          <App />
        </AlertProvider>
      </GithubProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
