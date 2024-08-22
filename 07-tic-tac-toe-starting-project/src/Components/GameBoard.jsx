 const initialGB = 
[[null,null,null],
 [null,null,null],
 [null,null,null]]

export default function GameBoard({onSelectSquare, turns }){
    // const [gameBoard,setGameBoard] = useState(initialGB);

    // function handleClick(rowIdx,colIdx){
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameBoard = [...prevGameBoard.map(item => [...item])];
    //         updatedGameBoard[rowIdx][colIdx] = activePlayer;
            
    //         return updatedGameBoard;
    //     });
 
    //     onSelectSquare();
    // } 
    let gameBoard = initialGB;

    for(const turn of turns){
        const {square,player} = turn;
        gameBoard[square.row][square.col] = player;
    }

    return (
        <ol id = "game-board">
            {gameBoard.map( (row,rowIdx) => 
            <li key={rowIdx}>
                <ol>
                    {row.map((data,colIdx) => 
                    <li key={colIdx}>
                        <button onClick={() => onSelectSquare(rowIdx,colIdx)}>{data}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    ); 
}