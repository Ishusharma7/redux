import { buy_book } from "./material";
import { buy_pen } from "./material";

const purchase_book = () => {
  return {
    type: buy_book
  };
};
export default purchase_book;

const purchase_pen = () => {
  return {
    type: buy_pen
  };
};
export { purchase_pen };
