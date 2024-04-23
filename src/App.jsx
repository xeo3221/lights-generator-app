import "./App.css";
import { Counter } from "./components/Counter";
import { Text } from "./components/Text";

function App() {
  return (
    <div>
      <nav className="nav">
        <Text className="counter">0 bulbs</Text>
        <Counter text={"rows"} count={0} />
        <Counter text={"columns"} count={0} />
      </nav>
    </div>
  );
}

export default App;
