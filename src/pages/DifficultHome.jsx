import classes from "./Home.module.css";
import Button from "../ui/Button";
import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import lizard from "../assets/images/icon-lizard.svg";
import spock from "../assets/images/icon-spock.svg";
import pentagon from "../assets/images/bg-pentagon.svg";
import {useDispatch} from "react-redux";
import {addChoice, addHouseChoice} from "./gameSlice";
import {useNavigate} from "react-router-dom";

function DifficultHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = ["paper", "rock", "scissors", "lizard", "spock"];
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function changeHandler(item) {
    dispatch(addChoice(item));
    dispatch(addHouseChoice(items[getRandomInt(5)]));
    navigate("/playground");
  }
  return (
    <div className={classes.difficultContainer}>
      <img src={pentagon} className={classes.pentagon}></img>
      <div className={classes.first}>
        <Button
          className={`${classes.scissors} ${classes.small}`}
          onClick={() => {
            changeHandler("scissors");
          }}
        >
          <img src={scissors} className={classes.logo}></img>
        </Button>
      </div>
      <div className={classes.second}>
        <Button
          className={`${classes.spock} ${classes.small}`}
          onClick={() => {
            changeHandler("spock");
          }}
        >
          <img src={spock} className={classes.logo}></img>
        </Button>
        <Button
          className={`${classes.paper} ${classes.small}`}
          onClick={() => {
            changeHandler("paper");
          }}
        >
          <img src={paper} className={classes.logo}></img>
        </Button>
      </div>
      <div className={classes.third}>
        <Button
          className={`${classes.lizard} ${classes.small} `}
          onClick={() => {
            changeHandler("lizard");
          }}
        >
          <img src={lizard} className={classes.logo}></img>
        </Button>
        <Button
          className={`${classes.rock} ${classes.small}`}
          onClick={() => {
            changeHandler("rock");
          }}
        >
          <img src={rock} className={classes.logo}></img>
        </Button>
      </div>
    </div>
  );
}

export default DifficultHome;
