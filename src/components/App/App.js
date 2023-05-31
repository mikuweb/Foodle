import Game from '../Game';
import Header from '../Header';
import React, { useState } from "react";

function App() {
  
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
}

export default App;
