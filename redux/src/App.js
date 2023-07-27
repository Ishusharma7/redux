import { Provider } from "react-redux";
import './styles.css';
import store from "./reduxContainer/Store";
import Bookcontainer from "./reduxContainer/Bookcontainer";
import { Pencontainer } from "./reduxContainer/Bookcontainer";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Bookcontainer />
        <Pencontainer />
      </div>
    </Provider>
  );
}
