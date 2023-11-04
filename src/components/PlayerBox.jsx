import {React, usestate} from "react";

function PlayerBox({ index, name, setIsSelectingPlayer, isSelectingPlayer}) {
    
  return (
    <>
      <div className="box" key={index} onClick={() => setIsSelectingPlayer(!isSelectingPlayer)}>
        <h2>{name}</h2>
      </div>
    </>
  );
}

export default PlayerBox;
