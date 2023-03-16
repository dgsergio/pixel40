import HeroSection from './sections/Hero';
import NavMenu from './NavMenu';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`container ${classes.container}`}>
        <div className={classes.logo}>
          <a href="index.html">
            <img src='img/logo-icon.png' alt="Icono Pixel40" />
          </a>
          <a href="index.html">
            <h1>
              Pixel<span>40</span>
            </h1>
          </a>
        </div>
        <NavMenu />
      </div>
      <HeroSection />
    </header>
  );
};

export default Header;
