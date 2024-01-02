import './App.css'

function App () {
  return (
    <div className='page'>
      <header>
        <h1>Movie Search.</h1>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix..' />
          <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        All of movies
      </main>
    </div>
  )
}

export default App
