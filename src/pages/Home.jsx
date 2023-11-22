import Button from "../ui/Button";
import rock from "../assets/images/icon-rock.svg";
import classes from "./Home.module.css";
import triangle from "../assets/images/bg-triangle.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import {useDispatch} from "react-redux";
import {addChoice, addHouseChoice} from "./gameSlice";
import {useNavigate} from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = ["paper", "rock", "scissors"];
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function changeHandler(item) {
    dispatch(addChoice(item));
    dispatch(addHouseChoice(items[getRandomInt(3)]));
    navigate("/playground");
  }

  return (
    <>
      <div className={classes.buttons}>
        <img src={triangle} className={classes.triangle}></img>
        <Button
          className={classes.paper}
          onClick={() => {
            changeHandler("paper");
          }}
        >
          <img src={paper}></img>
        </Button>

        <Button
          className={classes.scissors}
          onClick={() => {
            changeHandler("scissors");
          }}
        >
          <img src={scissors}></img>
        </Button>
        <Button
          className={classes.rock}
          onClick={() => {
            changeHandler("rock");
          }}
        >
          <img src={rock}></img>
        </Button>
      </div>
      {/* <Rules /> */}
    </>
  );
}

export default Home;
