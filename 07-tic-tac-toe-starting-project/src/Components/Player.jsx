import { useState } from 'react';

export default function Player({name,symbol,isActive}){
    const [editing,setEditing] = useState(false);
    const [playerName,setPlayerName] = useState(name);
    var ip;
    if (editing){
        ip = <input required value={playerName} onChange={handleChange}></input>;
    }
    else{
        ip = <span className="player-name">{playerName}</span>;
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    function handleClick(){
        setEditing((editing) => !editing);
    } 
    return (
    <li className={isActive ? 'active' : undefined}>
        <span className="player">
          {ip}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{editing ? "Save" : "Edit"}</button>
    </li>);
}