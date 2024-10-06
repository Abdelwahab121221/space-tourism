import React from "react";
import "./style/index.css";
import Header from "./components/Header";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="Home">
      <Header active="Home" />
      <div className="content">
        <div className="box">
          <div className="text">
            <h3 className="barlow-condensed-regular">
              SO, YOU WANT TO TRAVEL TO
            </h3>
            <h1 className="bellefair-regular">SPACE</h1>
            <p className="barlow-regular">Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="explore">
            <Link to="/Destination" className="bellefair-regular">
              EXPLORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
