import { useEffect, useState } from 'react'

function App () {
  useEffect(() => {
    console.log('efecto')
  })
  const [enabled, setEnabled] = useState(false)
  return (
    <>
      <h3>Projecto 3</h3>
      <button>Activar seguir puntero</button>
    </>
  )
}

export default App
