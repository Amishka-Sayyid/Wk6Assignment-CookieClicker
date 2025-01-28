import "./App.css";
import { Timer } from "./Components/Timer";
import Shop from "./Components/Shop";
export default function App() {
  return (
    <>
      <div className="App">
        <h1>Cookie Clicker Game</h1>

        <Timer />

        <Shop />
      </div>
    </>
  );
}
