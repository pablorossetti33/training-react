import './App.css'
import { useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App () {
  const { movies } = useMovies()
  const inputRef = useRef()

  const handleClick = () => {
    const value = inputRef.current.value
    console.log(value)
  }
  return (
    <div className='page'>
      <header>
        <h1>Movie Search.</h1>
        <form className='form'>
          <input ref={inputRef} placeholder='Avengers, Star Wars, The Matrix..' />
          <button onClick={handleClick} type='submit'>Search</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
