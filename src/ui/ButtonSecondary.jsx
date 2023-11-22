import classes from "./ButtonSecondary.module.css";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

function ButtonSecondary() {
  const level = useSelector((state) => state.game.difficulty);
  const navigate = useNavigate();

  function levelHandler() {
    if (level === "easy") navigate("/home");
    if (level === "difficult") navigate("/difficult");
  }
  return (
    <button className={classes.btnSecondary} onClick={() => levelHandler()}>
      {" "}
      Next round
    </button>
  );
}

export default ButtonSecondary;
