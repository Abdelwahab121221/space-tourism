import React, { useState } from "react";
import Header from "../components/Header";
import "../style/technology.css";
import capsule from '../assets/technology/image-space-capsule-portrait.png'
import capsuleTablete from '../assets/technology/image-space-capsule-landscape.png'
import vehicleTablete from '../assets/technology/image-launch-vehicle-landscape.png'
import spaceportTablete from '../assets/technology/image-spaceport-landscape.png'
import vehicle from '../assets/technology/image-launch-vehicle-portrait.png'
import spaceport from '../assets/technology/image-spaceport-portrait.png'
function Technology() {
  const [active, setActive] = useState('vehicle')
  return (
    <div className="Technology">
      <Header active="Technology" />
      <div className="content">
        <h3 className="barlow-condensed-regular">
          <strong>03</strong> Space launch 101
        </h3>
        <div className="info">
          <div className="text">
            <div className="spans">
              <span onClick={() => {
                setActive('vehicle')
              }} className={`${active === 'vehicle' ? 'active' : ''} bellefair-regular`} >1</span>
              <span onClick={() => {
                setActive('spaceport')
              }} className={`${active === 'spaceport' ? 'active' : ''} bellefair-regular`} >2</span>
              <span onClick={() => {
                setActive('capsule')
              }} className={`${active === 'capsule' ? 'active' : ''} bellefair-regular`} >3</span>
            </div>
            <div className="more-info">
              <h2 className="bellefair-regular">The terminology...</h2>
              <h1 className="bellefair-regular">{active === 'capsule' ? `Space capsule` : active === 'vehicle' ? `Launch vehicle` : active === 'spaceport' ? `Spaceport` : null}</h1>
              <p className="barlow-regular">{active === 'capsule' ? `  A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
              capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
              you'll spend your time during the flight. It includes a space gym, cinema, 
              and plenty of other activities to keep you entertained.` : active === 'vehicle' ? `  A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
              payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
              WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
              it's quite an awe-inspiring sight on the launch pad!` : active === 'spaceport' ? `  A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
              by analogy to the seaport for ships or airport for aircraft. Based in the 
              famous Cape Canaveral, our spaceport is ideally situated to take advantage 
              of the Earth’s rotation for launch.` : null}</p>
            </div>
          </div>
          <div className="img">
            <img src={
              active === 'capsule' ? window.innerWidth <= 1000 ? capsuleTablete : capsule :
                active === 'vehicle' ? window.innerWidth <= 1000 ? vehicleTablete : vehicle :
                  active === 'spaceport' ? window.innerWidth <= 1000 ? spaceportTablete : spaceport : null
            } alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
