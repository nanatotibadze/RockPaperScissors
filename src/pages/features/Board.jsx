import classes from "./Board.module.css";
import ButtonSecondary from "../../ui/ButtonSecondary";
import {useSelector} from "react-redux";
import ButtonReturn from "../../ui/ButtonReturn";

function Board() {
  const score = useSelector((state) => state.game.score);
  let result;
  if (score === "draw") {
    result = "draw";
  }
  if (score === "winner") result = "you win";
  if (score === "loser") result = "you lose";
  return (
    <div className={classes.board}>
      <h1 className={classes.title}>{result}</h1>

      <ButtonReturn />
      <ButtonSecondary />
    </div>
  );
}

export default Board;
