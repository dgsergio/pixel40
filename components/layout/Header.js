import HeroSection from './sections/home/Hero';
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
