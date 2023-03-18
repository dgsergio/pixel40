import classes from "./Modulo.module.css";

const Modulo = ({title, lectures, id}) => {
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <h4>{title}</h4>
      </div>
      <ul className={classes.body}>
        {lectures.map((lecture, index) => <li key={id+index}>{lecture}</li> )}
      </ul>
    </div>
  );
};

export default Modulo;
