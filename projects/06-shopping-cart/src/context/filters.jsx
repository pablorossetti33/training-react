import { createContext } from 'react'

// Este es el que tenemos que consumir
export const FiltersContext = createContext()

// Este es el que nos provee de acceso al contexto.
export function FilterProvider ({ children }) {
  return (
    <FiltersContext.Provider value={{
      category: 'laptops',
      minPrice: 0
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
