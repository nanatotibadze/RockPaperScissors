import classes from "./Button.module.css";

function Button({children, onClick, className}) {
  return (
    <button onClick={onClick} className={`${classes.btn} ${className}`}>
      {children}
    </button>
  );
}
export default Button;
