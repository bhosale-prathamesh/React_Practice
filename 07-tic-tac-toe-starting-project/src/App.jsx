import { useState } from "react"
import GameBoard from "./Components/GameBoard"
import Player from "./Components/Player";
import Log from './Components/Log';
import { WINNING_COMBINATIONS } from "./winning_combos";

const WCOMBO = [
  [
    {row : 0, col : 0},
    {row : 0, col : 1},
    {row : 0, col : 2},
  ]
]
function deriveActivePlayer(gameTurns)
{
  let curPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') 
  {
    curPlayer = 'O';
  }

  return curPlayer;
}
function App() {
  const[gameTurns, setGameTurns] = useState([]);
  // const[activePlayer,setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  function selectSquare(rowIdx,colIdx){
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns) => {
                  const curPlayer = deriveActivePlayer(gameTurns);
                  const updatedTurns = [{square : {row : rowIdx, col : colIdx },
                                        player: curPlayer}
                    
                    ,...prevTurns]
                  
                    return updatedTurns;
                });
  }
  return (
    <main>
      <div id ="game-container">
        <ol id= "players" className="highlight-player">
          <Player name = "Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player name = "Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={selectSquare} activePlayer = {activePlayer} turns = {gameTurns} />
      </div>
      <Log turns={gameTurns}/> 
    </main>
  )
}

export default App
