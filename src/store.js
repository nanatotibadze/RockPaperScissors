import {configureStore} from "@reduxjs/toolkit";
import gameReducer from "./pages/gameSlice";

const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

export default store;
