import {createSlice} from "@reduxjs/toolkit";

const MAX_SCORE = 12;
const initialState = {
  userChoice: null,
  houseChoice: null,
  score: null,
  totalScore: MAX_SCORE,
  difficulty: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addChoice(state, action) {
      state.userChoice = action.payload;
    },
    addHouseChoice(state, action) {
      state.houseChoice = action.payload;
    },
    changeStatus(state, action) {
      state.score = action.payload;
    },
    decreaseTotalScore(state) {
      state.totalScore--;
    },
    increaseTotalScore(state) {
      state.totalScore++;
    },
    changeLevel(state, action) {
      state.difficulty = action.payload;
    },
    clearScore(state) {
      state.totalScore = MAX_SCORE;
      state.difficulty = null;
    },
  },
});

export const {
  addChoice,
  addHouseChoice,
  changeStatus,
  decreaseTotalScore,
  increaseTotalScore,
  changeLevel,
  clearScore,
} = gameSlice.actions;

// export const getCart = (state) => state.cart.cart;
// export const getTotalCartQuantity = (state) =>
//   state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
// export const getTotalCartPrice = (state) =>
//   state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

// export const getQuantityById = (id) => (state) =>
//   state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? null;

export default gameSlice.reducer;
