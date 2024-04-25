import "./App.css";
import { Counter } from "./components/Counter";
import { Text } from "./components/Text";
import { SingleLight } from "./components/SingleLight";
import { useState } from "react";
import { Grid } from "./components/Grid";

function App() {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  const handleIcrementRow = () => {
    setRows(rows + 1);
  };
  const handleDecrementRow = () => {
    if (rows <= 0) return;
    setRows(rows - 1);
  };

  const handleIcrementColumn = () => {
    if (columns >= 9) return;
    setColumns(columns + 1);
  };
  const handleDecrementColumn = () => {
    if (columns <= 0) return;
    setColumns(columns - 1);
  };

  const totalLights = rows * columns;

  const lights = Array.from({ length: totalLights });

  return (
    <div className="p-8">
      <nav className="flex mb-[50px] space-x-10">
        <Text>{totalLights} bulbs</Text>
        <Counter
          text={"rows"}
          count={rows}
          onIncrement={handleIcrementRow}
          onDecrement={handleDecrementRow}
        />
        <Counter
          text={"columns"}
          count={columns}
          onIncrement={handleIcrementColumn}
          onDecrement={handleDecrementColumn}
        />
      </nav>
      <Grid columns={columns}>
        {lights.map((value, index) => {
          return <SingleLight key={index} />;
        })}
      </Grid>
    </div>
  );
}

export default App;
