import { useState, useId } from 'react'
import './Filters.css'
export function Filters ({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)
  const [minPriceFilterId] = useId()
  const [categoryFilterId] = useId()
  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    onChange(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    onChange(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Price starting at</label>
        <input
          type='range'
          id='price'
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor='category'>Category</label>
        <select id='category' onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>SmartPhones</option>

        </select>
      </div>
    </section>
  )
}
