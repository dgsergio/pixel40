import classes from "./Hero.module.css";
import Button from "../../UI/Button";

const HeroSection = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.subtitle}>¡Dale a Sergio un poco de amor!</div>
      <div className={classes.title}>Apoya el canal</div>
      <Button className={classes.button}>Donar a Pixel40</Button>
    </section>
  );
};

export default HeroSection;
