import { useState } from "react"
import GameBoard from "./Components/GameBoard"
import Player from "./Components/Player";
import Log from './Components/Log';

function App() {
  const[gameTurns, setGameTurns] = useState([]);
  const[activePlayer,setActivePlayer] = useState('X');

  function selectSquare(rowIdx,colIdx){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns) => {
                  let curPlayer = 'X';
                  if (prevTurns.length > 0 && prevTurns[0].player === 'X') 
                  {
                    curPlayer = 'O';}
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
