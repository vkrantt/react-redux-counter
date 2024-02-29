import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByNum,
  resetAll,
} from "./store/slices/counterSlice";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(incrementByNum(Number(value)));
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <div>
          <input
            type="number"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="Type"
          />
        </div>
        <div className="d-flex">
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
        <div className="d-flex">
          <button onClick={handleAdd}>Increment By Num</button>
          <button
            onClick={() => {
              dispatch(resetAll());
              setValue("");
            }}
          >
            Reset All
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
