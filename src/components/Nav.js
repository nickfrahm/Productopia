import React from 'react'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  return (
    <div className="nav">
      <h1 className="nav-item">Productopia</h1>
      <FontAwesomeIcon icon={faBars} className="nav-item" id="menu"/>
    </div>
  );
}

export default Nav;