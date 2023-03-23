import Link from "next/link";
import classes from "./Hero.module.css";

const HeroSection = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.subtitle}>¡Dale a Sergio un poco de amor!</div>
      <div className={classes.title}>Apoya el canal</div>
      <Link href="/donar" className="button">
        Donar a Pixel40
      </Link>
    </section>
  );
};

export default HeroSection;
