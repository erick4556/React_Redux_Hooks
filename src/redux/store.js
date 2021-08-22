import { createStore } from "redux";
import reducer from "./reducers";

const initialState = {
  todos: [
    {
      id: 0,
      name: "Ir a trabajar",
      complete: false,
    },
    {
      id: 1,
      name: "Limpiar la casa",
      complete: true,
    },
    {
      id: 2,
      name: "Ir a correr",
      complete: false,
    },
  ],
};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
