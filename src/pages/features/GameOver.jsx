import classes from "./GameOver.module.css";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {clearScore} from "../gameSlice";
import ButtonReturn from "../../ui/ButtonReturn";

function GameOver() {
  const totalScore = useSelector((state) => state.game.totalScore);

  return (
    <div className={classes.gameOver}>
      {totalScore === 13 && <h1 className={classes.result}>you win 🎈✨</h1>}
      {totalScore === 0 && <h1 className={classes.result}>you lose 🎃</h1>}

      <ButtonReturn />
    </div>
  );
}

export default GameOver;
