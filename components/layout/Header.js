import HeroSection from './sections/home/Hero';
import classes from './Header.module.css';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className={classes.header}>
      <Navigation />
      <HeroSection />
    </header>
  );
};

export default Header;
