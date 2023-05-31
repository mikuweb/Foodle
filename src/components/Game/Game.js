import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input/Input";
import GuessedResult from "../GuessedResult/GuessedResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const handleSubmitGuess = (tentativeGuess) => {
    setGuesses([...guesses, tentativeGuess]);
  };

  return (
    <>
      <GuessedResult guesses={guesses} />
      <Input handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
