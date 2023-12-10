const TURNS = {
  X: "x",
  O: "o"

}

const board = Array(9).fill(null)

   function App() {
    return(
     <main className="board">
     <h1>Tic tac </h1>
     <section className="game">
      {
        board.map((_, index) => {
          return(
            <div key={index}>
              <span>
                {index}
              </span>
            </div>
          )
        })
      }
     </section>
     </main>
    )
}

export default App
