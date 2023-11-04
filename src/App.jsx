import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import MainApp from "./components/MainApp";
import Navbar from "./components/Navbar";
function App() {
  const [page, setPage] = useState("home");
  const [players, setPlayers] = useState([]);
  

  return (
    <>
      <div className="main-container">
        <Navbar />

        {/* Render pages depending on page variable */}
        {page === "home" && <Home setPage={setPage} />}
        {page === "main-app" && (
          <MainApp players={players} setPlayers={setPlayers} />
        )}
      </div>


      
    </>
  );
}

export default App;
