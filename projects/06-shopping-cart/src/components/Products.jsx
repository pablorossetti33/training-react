import './Products.css'
import { AddToCartIcon } from './Icons'

export function Products ({ products }) {
  return (
    <main>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}
