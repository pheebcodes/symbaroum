import "./index.scss";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router } from "./components/router.jsx";
import { store } from "./store/index.js";

const element = (
  <Provider store={store}>
    <Router />
  </Provider>
);

render(element, document.getElementById("__react-root"));
