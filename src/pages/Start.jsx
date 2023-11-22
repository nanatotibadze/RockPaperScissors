import classes from "./Start.module.css";
import {useDispatch} from "react-redux";
import {changeLevel} from "./gameSlice";
import {useNavigate} from "react-router-dom";

function Start() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function levelHandler(item) {
    dispatch(changeLevel(item));

    if (item === "easy") navigate("/home");
    if (item === "difficult") navigate("/difficult");
  }
  return (
    <div className={classes.start}>
      <h2 className={classes.startTitle}>Choose level:</h2>
      <button
        className={`${classes.startBtn} ${classes.easy}`}
        onClick={() => levelHandler("easy")}
      >
        Easy
      </button>
      <button
        className={`${classes.startBtn} ${classes.difficult}`}
        onClick={() => levelHandler("difficult")}
      >
        difficult
      </button>
    </div>
  );
}

export default Start;
