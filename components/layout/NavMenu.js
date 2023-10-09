import Link from 'next/link';
import classes from './NavBar.module.css';

const NavMenu = (props) => {
  return (
    <nav className={classes.nav}>
      <Link href="/">Inicio</Link>
      <Link href="/curso">Curso</Link>
      {/*temp diseabled <Link href="/#clases">Clases</Link> */}
      <Link href="/donar">Donar</Link>
      <Link href="/videos">YouTube</Link>
      <Link href="contacto">Contacto</Link>
    </nav>
  );
};

export default NavMenu;
