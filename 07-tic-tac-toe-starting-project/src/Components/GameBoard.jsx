 const initialGB = 
[[null,null,null],
 [null,null,null],
 [null,null,null]]

export default function GameBoard({onSelectSquare, activePlayer }){
    // const [gameBoard,setGameBoard] = useState(initialGB);

    // function handleClick(rowIdx,colIdx){
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameBoard = [...prevGameBoard.map(item => [...item])];
    //         updatedGameBoard[rowIdx][colIdx] = activePlayer;
            
    //         return updatedGameBoard;
    //     });
 
    //     onSelectSquare();
    // } 
    return (
        <ol id = "game-board">
            {gameBoard.map( (row,rowIdx) => 
            <li key={rowIdx}>
                <ol>
                    {row.map((data,colIdx) => 
                    <li key={colIdx}>
                        <button onClick={onSelectSquare}>{data}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    ); 
}