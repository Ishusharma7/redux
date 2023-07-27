import { buy_book } from "./material";
import { buy_pen } from "./material";

const initialState = {
  NumberOfBooks: 20,
  NumberOfPens: 10
};

const Bookreducer = (state = initialState, action) => {
  switch (action.type) {
    case buy_book:
      return {
        ...state,
        NumberOfBooks: state.NumberOfBooks - 1
      };

    case buy_pen:
      return {
        ...state,
        NumberOfPens: state.NumberOfPens - 1
      };

    default:
      return state;
  }
};

export default Bookreducer;
