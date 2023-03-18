import classes from "./Hero.module.css";

const HeroSection = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.subtitle}>¡Dale a Sergio un poco de amor!</div>
      <div className={classes.title}>Apoya el canal</div>
      <button className={classes.button}>Donar a Pixel40</button>
    </section>
  );
};

export default HeroSection;
