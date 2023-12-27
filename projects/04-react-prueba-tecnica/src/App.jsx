import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL:

export function App () {
  const [fact, setFact] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(data.fact)

        const firstWord = fact.split(' ').slice(0, 3).join(' ')
      })
  }, [])
  return (
    <main>
      <h1>App de Gatitos</h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}
