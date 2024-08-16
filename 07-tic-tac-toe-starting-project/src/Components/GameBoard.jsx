const initialGB = 
[[null,null,null],
 [null,null,null],
 [null,null,null]]

export default function GameBoard(){
    return (
        <ol id = "game-board">
            {initialGB.map( (row,rowIdx) => <li>
                <ol>
                    {row.map((data,colIdx) => <li><button>{data}</button></li>)}
                </ol>
            </li>)}
        </ol>
    );
}