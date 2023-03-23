import Link from "next/link";
import { useState } from "react";
import classes from "./NavBar.module.css";
import NavMenu from "./NavMenu";

const NavFixed = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={classes.navFix}>
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
        </div>
        <div className={classes["menu-desktop"]}>
          <NavMenu />
        </div>

        <button onClick={()=>{setShowMenu(pV=>!pV)}} className={classes["menu-btn"]}>Menu</button>
      </div>
      {showMenu && (
        <div className={classes["menu-mobil"]}>
          <NavMenu />
        </div>
      )}
    </div>
    
  );
};

export default NavFixed;
