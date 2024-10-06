import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Destination from './pages/Destination'
import NotFoundPage from './pages/NotFoundPage'
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="*" Component={NotFoundPage}></Route>
        <Route path="/" Component={App}></Route>
        <Route path="/Destination" Component={Destination}></Route>
        <Route path="/Crew" Component={Crew}></Route>
        <Route path="/Technology" Component={Technology}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
