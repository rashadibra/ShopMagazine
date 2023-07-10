import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

import "./Nav.css";

function Navbar() {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const toggleMenu = () => {
    setIsActiveMenu(!isActiveMenu);
  };

  return (
    <nav>
      <input type="checkbox" id="check" />
      <label onClick={toggleMenu} className="checkbtn">
        <FontAwesomeIcon icon={faBars} />
      </label>
      <label className="logo">SHOP</label>
      <ul className={isActiveMenu ? "active_menu" : ""}>
        <li>
          <NavLink to="/">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/Main">About</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
       
      </ul>
    </nav>
  );
}

export default Navbar;
