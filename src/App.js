import { Provider } from "react-redux";
import { store } from "./redux/store";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <List />
        <br />
        <AddTodo />
      </div>
    </Provider>
  );
}

export default App;
