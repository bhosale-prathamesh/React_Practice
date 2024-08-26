export default function GameBoard({onSelectSquare, gameBoard }){
    return (
        <ol id = "game-board">
            {gameBoard.map( (row,rowIdx) => 
            <li key={rowIdx}>
                <ol>
                    {row.map((data,colIdx) => 
                    <li key={colIdx}>
                        <button onClick={() => onSelectSquare(rowIdx,colIdx)} disabled = {data !== null}>
                            {data}
                        </button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    ); 
}