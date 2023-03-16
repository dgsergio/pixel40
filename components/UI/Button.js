import classes from "./Button.module.css";

const Button = (props) => {
  const classesBtn = props.className
    ? `${props.className} ${classes.button}`
    : classes.button;
  return (
    <button className={classesBtn} type={props.type || "text"}>
      {props.children}
    </button>
  );
};

export default Button;
