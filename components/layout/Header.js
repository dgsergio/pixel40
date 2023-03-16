import HeroSection from './sections/Hero';
import classes from './Header.module.css';
import NavHeader from './NavBar';

const Header = () => {
  return (
    <header className={classes.header}>
      <NavHeader />
      <HeroSection />
    </header>
  );
};

export default Header;
