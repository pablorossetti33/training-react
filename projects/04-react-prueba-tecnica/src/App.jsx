import { useEffect, useState } from 'react'

export function App () {
  const [fact, setFact] = useState('lorem ipsum cat fact')

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
  }, [])
  return (
    <main>
      <h1>App de Gatitos</h1>
      <p>{fact}</p>
    </main>
  )
}
