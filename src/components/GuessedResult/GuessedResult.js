import React from "react";

function GuessedResult({ guesses }) {
console.log(guesses)
  return (
    <>
      <div class="guess-results">
        {guesses.map((guess, index) => (
          <p key={index} class="guess">
            {guess.value}
          </p>
        ))}
      </div>
    </>
  );
}

export default GuessedResult;
