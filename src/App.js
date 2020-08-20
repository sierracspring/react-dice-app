import React from "react";
import "./App.css";
import Die from "./components/Die";

function App() {
  const [numberOfSides, setNumberOfSides] = React.useState(6);
  const [diceBag, setDiceBag] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const existingDiceBag = diceBag.slice();
    existingDiceBag.push(Number(numberOfSides));
    setDiceBag(existingDiceBag);
  }

  return (
    <div className="App">
      <h1>My React Dice Bag</h1>
      <form onSubmit={handleSubmit}>
        <h3>Create a New Die</h3>
        <label>
          Number of Sides:
          <input
            type="number"
            value={numberOfSides}
            onChange={(e) => setNumberOfSides(e.target.value)}
          />
        </label>
        <button>Create</button>
      </form>
      <h3>Dice Bag:</h3>
      {diceBag.map((dieSides) => {
        return <Die numberOfSides={dieSides} />;
      })}
    </div>
  );
}

export default App;
