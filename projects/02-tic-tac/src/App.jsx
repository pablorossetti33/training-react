import { useState } from "react"
import confetti from "canvas-confetti"

import {Square} from "./components/Square"
import {TURNS} from "./constants"
import {checkWinnerFrom, checkEndGame} from "./logic/board"
import {WinnerModal} from "./components/WinnerModal"
import {saveGameToStorage, resetGameStorage} from "./logic/storage/index"


   function App() {
    const [board, setBoard] = useState(Array(9).fill(null))

    const [turn,setTurn] = useState(TURNS.X)
    //null es que no hay ganador, false hay empate.
    const [winner, setWinner] = useState(null) 

    const checkWinner = (boardToCheck) => {
      //Revisamos las combinaciones
      for (const combo of WINNER_COMBOS){
        const [a, b, c] = combo
        if (
          boardToCheck[a] &&
          boardToCheck[a] === boardToCheck[b] &&
          boardToCheck[a] === boardToCheck[c]
        ){
          return boardToCheck[a]
        }
      }
      //Si no hay ganador:
      return null
    }

    const updateBoard = (index) =>{
      //No actualizamos esta posición si ya tiene algo.
      if (board[index] || winner) return
      //Actualizar tablero
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)
      //Cambiar el turno
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)
      //Revisar si hay ganador
      const newWinner = checkWinnerFrom(newBoard)
      if (newWinner) {
        confetti()
        setWinner(newWinner)
      } else if (checkEndGame(newBoard)) {
        setWinner(false) // empate
     }


    }

    return(
     <main className="board">
     <h1>Tic tac </h1>
     <section className="game">
      {
        board.map((_, index) => {
          return(
            <Square
            key = {index}
            index={index}
            updateBoard={updateBoard}
            >
              {board[index]}
              </Square>
          )
        })
      }
     </section>
     <section className="turn">
       <Square isSelected={turn === TURNS.X}>
        {TURNS.X}
        </Square>
       <Square isSelected={turn === TURNS.O}>
        {TURNS.O}
        </Square>
     </section>
    
     {
      winner ===! null && (
        <section className="winner">
        <div className="text">
          <h2>
            {
              winner === false
              ? "empate"
              : "Ganó:"
            }
          </h2>
          <header className="win">
            {winner && <Square>{winner}</Square>}
          </header>

          <footer>
            <button>Empezar de nuevo</button>
          </footer>
        </div>
        </section>
      )
     }



     </main>
    )
}

export default App
