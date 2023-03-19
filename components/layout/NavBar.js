//1. Create a fixed navegation version 
//2. maybe psosition absoulte?

import Link from "next/link";
import classes from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const openMenuHandler = () => setMenuIsOpen(pV=>!pV);

  const menuClasses = menuIsOpen?`${classes.showMenu} ${classes.nav}`:classes.nav;
  
  return (
    <div className={classes.navBar}>
      <div className={`container ${classes.container}`}>
        <div className={classes.logoMenu}>
          <div className={classes.logo}>
            <Link href="/">
              <img src="img/logo-icon.png" alt="Icono Pixel40" />
            </Link>
            <Link href="/">
              <h1>
                Pixel<span>40</span>
              </h1>
            </Link>
          </div>
          <button onClick={openMenuHandler} className={classes.btn}>
            Menu <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <nav className={menuClasses}>
          <Link href="/" onClick={openMenuHandler}>Inicio</Link>
          <Link href="/curso" onClick={openMenuHandler}>Curso</Link>
          <Link href="/#clases" onClick={openMenuHandler}>Clases</Link>
          <Link href="/donar" onClick={openMenuHandler}>Donar</Link>
          <Link href="#"onClick={openMenuHandler} >YouTube</Link>
          <Link href="contacto" onClick={openMenuHandler}>Contacto</Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
