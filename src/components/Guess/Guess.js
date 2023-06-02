import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <>
      <p className="guess">
        {range(5).map((num) => (
          <span key={num} className="cell">{value ? value[num] : undefined}</span>
        ))}
      </p>
    </>
  );
}

// <p key={cell} class="guess">
//             <span class="cell">F</span>
//             <span class="cell">I</span>
//             <span class="cell">R</span>
//             <span class="cell">S</span>
//             <span class="cell">T</span>
//           </p>

export default Guess;
