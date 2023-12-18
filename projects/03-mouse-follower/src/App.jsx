import { useEffect, useState } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    console.log('efecto', { enabled })
  }, [enabled])
  return (
    <main>
      <h3>Projecto 3</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App
