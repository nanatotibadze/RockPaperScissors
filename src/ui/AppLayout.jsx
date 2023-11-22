import {Outlet} from "react-router-dom";
import classes from "./AppLayout.module.css";
import Header from "./Header";
import Rules from "../pages/features/Rules";
import {useState} from "react";
import {useSelector} from "react-redux";

function AppLayout() {
  const [isShown, setIsShown] = useState(false);
  const level = useSelector((state) => state.game.difficulty);

  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.main}>
        <Outlet />

        <div className={classes.footerDiv}>
          {level && (
            <button
              className={classes.footer}
              onClick={() => setIsShown((show) => !show)}
            >
              Rules
            </button>
          )}
          {isShown && <Rules setIsShown={setIsShown} />}
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
