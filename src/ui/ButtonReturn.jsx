import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {clearScore} from "../pages/gameSlice";
import classes from "./ButtonReturn.module.css";

function ButtonReturn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <button
      className={classes.startAgain}
      onClick={() => {
        dispatch(clearScore());

        navigate("/");
      }}
    >
      Start again &#x27F2;
    </button>
  );
}

export default ButtonReturn;
