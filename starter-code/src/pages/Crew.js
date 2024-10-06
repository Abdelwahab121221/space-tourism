import React, { useState } from "react";
import "../style/crew.css";
import Header from "../components/Header";
import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";
function Crew() {
  const [active, setActive] = useState("douglas");
  return (
    <div className="Crew">
      <Header active="Crew" />
      <div className="content">
        <h3 className="barlow-condensed-regular">
          <strong>02</strong> Meet your crew
        </h3>
        <div className="info">
          <div className="presentation">
            <div className="text">
              <h3 className="bellefair-regular">
                {active === "douglas"
                  ? `commander`
                  : active === "mark"
                  ? `Mission Specialist`
                  : active === "victor"
                  ? `pilot`
                  : active === "anousheh"
                  ? `Flight Engineer`
                  : null}
              </h3>
              <h1 className="bellefair-regular">
                {active === "douglas"
                  ? `Douglas Hurley`
                  : active === "mark"
                  ? `Mark Shuttleworth`
                  : active === "victor"
                  ? `Victor Glover`
                  : active === "anousheh"
                  ? `Anousheh Ansari`
                  : null}
              </h1>
              <p className="barlow-regular">
                {active === "douglas" ? (
                  `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
              and former NASA astronaut. He launched into space for the third time as 
              commander of Crew Dragon Demo-2.`
                ) : active === "anousheh" ? (
                  `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
              Ansari was the fourth self-funded space tourist, the first self-funded woman to 
              fly to the ISS, and the first Iranian in space.`
                ) : active === "victor" ? (
                  `  Pilot on the first operational flight of the SpaceX Crew Dragon to the 
              International Space Station. Glover is a commander in the U.S. Navy where 
              he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
              station systems flight engineer. `
                ) : active === "mark" ? (
                  <>
                    Mark Richard Shuttleworth is the founder and CEO of
                    Canonical, the company behind the Linux-based Ubuntu
                    operating system.
                    <br />
                    Shuttleworth became the first South African to travel to
                    space as a space tourist.
                  </>
                ) : null}
              </p>
            </div>
            <div className="persons">
              <span
                onClick={() => {
                  setActive("douglas");
                }}
                className={active === "douglas" ? "active" : ""}
              ></span>
              <span
                onClick={() => {
                  setActive("mark");
                }}
                className={active === "mark" ? "active" : ""}
              ></span>
              <span
                onClick={() => {
                  setActive("victor");
                }}
                className={active === "victor" ? "active" : ""}
              ></span>
              <span
                onClick={() => {
                  setActive("anousheh");
                }}
                className={active === "anousheh" ? "active" : ""}
              ></span>
            </div>
          </div>
          <div className="img">
            <img
              src={
                active === "douglas"
                  ? douglas
                  : active === "mark"
                  ? mark
                  : active === "victor"
                  ? victor
                  : active === "anousheh"
                  ? anousheh
                  : null
              }
              alt="person"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
