import classes from "./Header.module.css";
import {useSelector} from "react-redux";
function Header() {
  const totalScore = useSelector((state) => state.game.totalScore);
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <p>rock </p>
        <p>paper</p>
        <p>scissors</p>
        {/* <p>lizard</p>
        <p>spock</p> */}
      </div>
      <div className={classes.score}>
        <p className={classes.scoreTxt}>score</p>
        <p className={classes.num}>{totalScore}</p>
      </div>
    </div>
  );
}

export default Header;
