import './App.css';
import { useState } from 'react';
import Dice from './components/dice';

function App() {

  const [dice, setDice] = useState(1);

  function randomNum() {
    setDice(Math.floor(Math.random() * 6 + 1));
  }

  return (
    <div className="App" onClick={randomNum}>
      <Dice diceNum={dice} ></Dice>
    </div>
  );
}



export default App;
