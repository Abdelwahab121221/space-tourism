import React, { useState } from "react";
import Header from "../components/Header";
import "../style/destination.css";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
function Destination() {
  const [active, setActive] = useState("moon");
  return (
    <div className="Destination">
      <Header active="Destination" />
      <div className="content">
        <h3 className="barlow-condensed-regular">
          <strong>01</strong> Pick your destination
        </h3>
        <div className="info">
          <div className="img">
            <img
              src={
                active === "moon"
                  ? moon
                  : active === "mars"
                  ? mars
                  : active === "titan"
                  ? titan
                  : active === "europa"
                  ? europa
                  : null
              }
              alt="moon"
            />
          </div>
          <div className="text">
            <ul>
              <li
                onClick={() => {
                  setActive("moon");
                }}
                className={`${
                  active === "moon" ? "active" : ""
                } barlow-condensed-regular`}
              >
                moon
              </li>
              <li
                onClick={() => {
                  setActive("mars");
                }}
                className={`${
                  active === "mars" ? "active" : ""
                } barlow-condensed-regular`}
              >
                mars
              </li>
              <li
                onClick={() => {
                  setActive("europa");
                }}
                className={`${
                  active === "europa" ? "active" : ""
                } barlow-condensed-regular`}
              >
                europa
              </li>
              <li
                onClick={() => {
                  setActive("titan");
                }}
                className={`${
                  active === "titan" ? "active" : ""
                } barlow-condensed-regular`}
              >
                titan
              </li>
            </ul>
            <h1 className="bellefair-regular">
              {active === "moon"
                ? "moon"
                : active === "mars"
                ? "mars"
                : active === "titan"
                ? "titan"
                : active === "europa"
                ? "europa"
                : null}
            </h1>
            <p className="barlow-regular">
              {active === "moon"
                ? `See our planet as you’ve never seen it before. A perfect relaxing trip away to help
              regain perspective and come back refreshed. While you’re there, take in some history
              by visiting the Luna 2 and Apollo 11 landing sites.`
                : active === "mars"
                ? `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
              the tallest planetary mountain in our solar system. It’s two and a half times
              the size of Everest!`
                : active === "titan"
                ? `  The only moon known to have a dense atmosphere other than Earth, Titan 
              is a home away from home (just a few hundred degrees colder!). As a 
              bonus, you get striking views of the Rings of Saturn.`
                : active === "europa"
                ? `  The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
              winter lover’s dream. With an icy surface, it’s perfect for a bit of 
              ice skating, curling, hockey, or simple relaxation in your snug 
              wintery cabin.`
                : null}
            </p>
            <span></span>
            <div className="more-info">
              <div className="dis">
                <h3 className="barlow-condensed-regular">Avg. distance</h3>
                <span className="bellefair-regular">
                  {active === "moon"
                    ? `384,400 km`
                    : active === "mars"
                    ? `225 mil. km`
                    : active === "titan"
                    ? `1.6 bil. km`
                    : active === "europa"
                    ? `628 mil. km`
                    : null}
                </span>
              </div>
              <div className="travel-time">
                <h3 className="barlow-condensed-regular">Est. travel time</h3>
                <span className="bellefair-regular">
                  {active === "moon"
                    ? `3 days`
                    : active === "mars"
                    ? `9 months`
                    : active === "titan"
                    ? `7 years`
                    : active === "europa"
                    ? `3 years`
                    : null}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
