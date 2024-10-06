import React, { useState } from "react";
import "../style/global.css";
import "../style/header.css";
import logo from "../assets/shared/logo.svg";
import menu from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'
import { Link } from "react-router-dom";
function Header({ active }) {
  const [navMenu, setNavMenu] = useState(false)
  return (
    <header>
      <div className="logo">
        <img className="logo" src={logo} alt="logo" />
        <span></span>
      </div>
      <div className="menu">
        <img onClick={() => {
          setNavMenu(!navMenu)
        }} className="menu" src={menu} alt="menu" />
      </div>
      {navMenu && <div className="navMenu">
        <img onClick={() => {
          setNavMenu(false)
        }} className="close" src={close} alt="close" />
        <ul>
          <li>
            <Link className={`${active === 'Home' ? 'active' : ''} barlow-condensed-regular`} to={window.origin + "/"}>
              <strong>00</strong> HOME
            </Link>
          </li>
          <li>
            <Link className={`${active === 'Destination' ? 'active' : ''} barlow-condensed-regular`} to={window.origin + "/Destination"}>
              <strong>01</strong> DESTINATION
            </Link>
          </li>
          <li>
            <Link className={`${active === 'Crew' ? 'active' : ''} barlow-condensed-regular`} to={window.origin + "/Crew"}>
              <strong>02</strong> CREW
            </Link>
          </li>
          <li>
            <Link className={`${active === 'Technology' ? 'active' : ''} barlow-condensed-regular`} to={window.origin + "/Technology"}>
              <strong>03</strong> TECHNOLOGY
            </Link>
          </li>
        </ul>
      </div>}
      <nav>
        <ul>
          <li>
            <Link className={`${active === 'Home' ? 'active' : ''} barlow-condensed-regular`} to={window.origin + "/"}>
              <strong>00</strong> HOME
            </Link>
          </li>
          <li>
            <Link className={`${active === 'Destination' ? 'active' : ''} barlow-condensed-regular`} to={window.origin + "/Destination"}>
              <strong>01</strong> DESTINATION
            </Link>
          </li>
          <li>
            <Link className={`${active === 'Crew' ? 'active' : ''} barlow-condensed-regular`} to={window.origin + "/Crew"}>
              <strong>02</strong> CREW
            </Link>
          </li>
          <li>
            <Link className={`${active === 'Technology' ? 'active' : ''} barlow-condensed-regular`} to={window.origin + "/Technology"}>
              <strong>03</strong> TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
