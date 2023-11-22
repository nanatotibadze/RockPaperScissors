import Button from "../ui/Button";
import rock from "../assets/images/icon-rock.svg";
import classes from "./Playground.module.css";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import ButtonSecondary from "../ui/ButtonSecondary";
import Board from "./features/Board";
import lizard from "../assets/images/icon-lizard.svg";
import spock from "../assets/images/icon-spock.svg";

import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {
  changeStatus,
  increaseTotalScore,
  decreaseTotalScore,
} from "./gameSlice";

function Playground() {
  const user = useSelector((state) => state.game.userChoice);
  const house = useSelector((state) => state.game.houseChoice);
  const status = useSelector((state) => state.game.score);
  const totalScore = useSelector((state) => state.game.totalScore);

  const [isShown, setIsShown] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShown(true);
      // setScoreIsShown(true);
      if (status === "winner") dispatch(increaseTotalScore());
      if (status === "loser") dispatch(decreaseTotalScore());
    }, 600);

    return () => clearTimeout(timeout);
  }, [status, dispatch]);

  useEffect(() => {
    if (totalScore === 24 || totalScore === 0) navigate("/over");
  }, [totalScore, navigate]);

  const images = {paper, scissors, rock, lizard, spock};

  if (
    (user === "paper" && house === "paper") ||
    (user === "rock" && house === "rock") ||
    (user === "scissors" && house === "scissors") ||
    (user === "spock" && house === "spock") ||
    (user === "lizard" && house === "lizard")
  ) {
    dispatch(changeStatus("draw"));
  }
  if (
    (user === "paper" && house === "scissors") ||
    (user === "scissors" && house === "rock") ||
    (user === "rock" && house === "paper") ||
    (user === "rock" && house == "spock") ||
    (user === "paper" && house === "lizard") ||
    (user === "lizard" && house === "rock") ||
    (user === "spock" && house === "paper") ||
    (user === "lizard" && house === "scissors") ||
    (user === "spock" && house === "lizard") ||
    (user === "scissors" && house === "spock")
  ) {
    dispatch(changeStatus("loser"));
  }
  if (
    (user === "paper" && house === "rock") ||
    (user === "scissors" && house === "paper") ||
    (user === "rock" && house === "scissors") ||
    (user === "lizard" && house === "paper") ||
    (user === "spock" && house == "rock") ||
    (user === "rock" && house === "lizard") ||
    (user === "paper" && house === "spock") ||
    (user === "scissors" && house === "lizard") ||
    (user === "lizard" && house === "spock") ||
    (user === "spock" && house === "scissors")
  ) {
    dispatch(changeStatus("winner"));
  }

  return (
    <div className={classes.container}>
      {user && house ? (
        <>
          <div className={classes.intro}>
            <p className={classes.p}>you picked</p>{" "}
            <Button className={`${classes[user]} ${classes.big}`}>
              <img src={images[user]} className={classes.image}></img>
            </Button>
          </div>
          {isShown && (
            <div className={classes.board}>
              <Board />
            </div>
          )}

          <div className={classes.intro}>
            <p className={classes.p}>The house picked</p>
            {!isShown && <div className={classes.empty}></div>}
            {isShown && (
              <Button className={`${classes[house]} ${classes.big}`}>
                <img src={images[house]} className={classes.image}></img>
              </Button>
            )}
          </div>
        </>
      ) : (
        <ButtonSecondary />
      )}
    </div>
  );
}

export default Playground;
