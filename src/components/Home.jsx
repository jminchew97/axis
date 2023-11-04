import React from "react";
import { Button } from "react-bootstrap";
function Home({setPage}) {
  return (
    <div className="body-container">
        
      <ol>
        <Button className="rotation-selection-button" onClick={() => setPage("main-app")}>King of the Hill</Button>
        <Button className="rotation-selection-button" onClick={() => setPage("main-app")}>Null</Button>
      </ol>
    </div>
  );
}

export default Home;
