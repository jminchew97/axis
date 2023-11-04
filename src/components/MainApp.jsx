import {React, useState} from "react";
import { Button } from "react-bootstrap";
import "./MainApp.css"
import PlayerBox from "./PlayerBox";
function MainApp({players, setPlayers}) {
    const [playerName, setPlayerName] = useState("")
    const [isSelelectingPlayer, setIsSelectingPlayer] = useState(false)

    function addPlayerToQueue(){
        setPlayers([playerName, ...players])
    }

  return (
    <div className="body-container">
        
        
        <div className="player-box-holder">
            {players.map((name, index) =>
            <PlayerBox
            name={name}
            index={index}
            isSelelectingPlayer={isSelelectingPlayer}
            setIsSelectingPlayer={setIsSelectingPlayer}
            />
            )}
        </div>
        

        <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} placeholder="name"></input>
        <h3>{isSelelectingPlayer ? <p>true</p> : <p>false</p>}</h3>
        {isSelelectingPlayer ? <Button variant="danger">Delete</Button>: <Button onClick={() => addPlayerToQueue()}>Add To Rotation</Button>}


    </div>
  );
}

export default MainApp;
