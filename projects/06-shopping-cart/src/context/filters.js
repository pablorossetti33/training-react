import { createContext } from 'react'

// Crear el context
export const FiltersContext = createContext()

// Crear el provider, para proveer el contexto.
export function FilterProvider ({ children }) {
  return (
    <FiltersContext.Provider value={{
      category: 'all',
      minPrice: 0
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
