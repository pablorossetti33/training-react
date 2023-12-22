import { useState } from 'react'

export function App () {
  const [fact, setFact] = useState('lorem ipsum cat fact')
  return (
    <main>
      <h1>App de Gatitos</h1>
      <p>{fact}</p>
    </main>
  )
}
