import { useState } from "react"
import GameBoard from "./Components/GameBoard"
import Player from "./Components/Player";
import Log from './Components/Log';
import { WINNING_COMBINATIONS } from "./winning_combos";
import GameOver from "./Components/GameOver";


const initialGB = 
[[null,null,null],
 [null,null,null],
 [null,null,null]]
  
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
  let winner = null;
  const activePlayer = deriveActivePlayer(gameTurns);
  let draw = (gameTurns.length === 9 && !winner);

  let gameBoard = initialGB;

  for(const turn of gameTurns){
      const {square,player} = turn;
      gameBoard[square.row][square.col] = player;
  }

  for (const combo of WINNING_COMBINATIONS){
    let first = gameBoard[combo[0].row][combo[0].column]
    let second = gameBoard[combo[1].row][combo[1].column]
    let third = gameBoard[combo[2].row][combo[2].column]

    if (first === second && second === third && first !== null){
      
      winner = first;
      console.log(winner+" won!");
    }
  }


  function selectSquare(rowIdx,colIdx){

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
        {(winner || draw) && <GameOver winner={winner}/>}
        <GameBoard onSelectSquare={selectSquare} gameBoard = {gameBoard} />
      </div>
      <Log turns={gameTurns}/> 
    </main>
  )
}

export default App
