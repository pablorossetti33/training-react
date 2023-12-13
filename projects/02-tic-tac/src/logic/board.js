import {WINNER_COMBOS} from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
// Revisamos todas las combinaciones
//Para ver si ganó X o O
 for (const combo of WINNER_COMBOS) {
     const [a, b, c] = combo
     if (
       boardToCheck[a] &&
       boardToCheck[a] === boardToCheck[b] &&
       boardToCheck[a] === boardToCheck[c]
     ) {
       return boardToCheck[a]
     }
   }
   // si no hay ganador
   return null
}
