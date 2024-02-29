export const counterReducers = {
  increment: (prevState) => {
    prevState.count += 1;
  },
  decrement: (prevState) => {
    prevState.count -= 1;
  },
  incrementByNum: (prevState, action) => {
    prevState.count += action.payload;
  },
  resetAll: (prevState, action) => {
    prevState.count = 0;
  },
};
