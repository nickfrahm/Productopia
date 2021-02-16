import React, {useState} from 'react'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from './Menu'

function Nav() {

  const [showMenu, setShowMenu] = useState('false');

  function handleNavClick(e) {
    setShowMenu(!showMenu);
  }

  return (
    <div className="nav">
      <h1 className="nav-item">Productopia</h1>
      <FontAwesomeIcon 
        icon={faBars} 
        className="nav-item" id="menu-icon"
        onClick={handleNavClick}  
      />
      <div className={showMenu ? 'hideMenu' : 'showMenu'}>
        <Menu />
      </div>
    </div>
  );
}

export default Nav;