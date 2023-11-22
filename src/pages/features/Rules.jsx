import classes from "./Rules.module.css";

import easy from "../../assets/images/image-rules.svg";
import difficult from "../../assets/images/image-rules-bonus.svg";
import {useSelector} from "react-redux";

function Rules({setIsShown}) {
  const level = useSelector((state) => state.game.difficulty);
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <div className={classes.title}>
          <h2>Rules</h2>
          <button
            className={classes.closeBtn}
            onClick={() => setIsShown((show) => !show)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              className={classes.svg}
            >
              <path
                fill='#3B4262'
                fillRule='evenodd'
                d='M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z'
                opacity='.25'
              />
            </svg>
          </button>
        </div>

        {level === "easy" ? <img src={easy} /> : <img src={difficult} />}
      </div>
    </div>
  );
}

export default Rules;
