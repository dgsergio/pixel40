import classes from './NavMenu.module.css';

const NavMenu = () => {
  return (
    <nav className={classes.nav}>
      <a href="index.html">Inicio</a>
      <a href="">Curso</a>
      <a href="#">Clases</a>
      <a href="#">Donar</a>
      <a href="#">YouTube</a>
      <a href="contacto.html">Contacto</a>
    </nav>
  );
};

export default NavMenu;
