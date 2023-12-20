import { useEffect, useState } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // pointer move
  useEffect(() => {
    console.log('efecto', { enabled })
  }, [enabled])

  const handleMove = (event) => {
    const { clientX, clientY } = event
    setPosition({ x: clientX, y: clientY })
  }
  if (enabled) {
    window.addEventListener('pointermove', handleMove)
  }

  // cleanup:
  // -> Cuando el componente se monta
  // -> Cuando cambian las dependencias antes de ejecutar
  // el efecto de nuevo
  return () => { // cleanup method
    console.log('cleanup')
    window.removeEventListener('pointermove', handleMove)
  }
}, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: 'translate(0px, 0px)'
      }}
      >
        <h3>Projecto 3</h3>
        <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Desactivar' : 'Activar'} seguir puntero
        </button>
      </div>
    </main>
  )
}

export default App