import React, { useState, Fragment } from "react";
import "../styles/components/_menu.scss";
import { HashLink as Link } from "react-router-hash-link";
import closeIcon from "../assets/close-icon.png";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuHandler = () => {
    setOpenMenu((prevState) => !prevState);
  };

  const menu = (
    <ul className="menu">
      <li>
        <Link to="#home" smooth>
          Home
        </Link>
      </li>
      <li>
        <Link to="#about" smooth>
          About
        </Link>
      </li>
      <li>
        <Link to="#projects" smooth>
          Projects
        </Link>
      </li>
      <li>
        <Link to="#contact" smooth>
          Contact
        </Link>
      </li>
      <button onClick={openMenuHandler} type="button">
        <img src={closeIcon} alt="close icon" />
      </button>
      <span></span>
    </ul>
  );

  return (
    <Fragment>
      <div
        className={`burgerDiv ${openMenu ? "active" : "disabled"}`}
        onClick={openMenuHandler}
      >
        <span></span>
        <span></span>
      </div>
      {openMenu && menu}
    </Fragment>
  );
};

export default Menu;
