import React from 'react'
import Header from './components/header'
import Product from './components/product'
import Products from './products.json'
import Basket from './components/basket'
import { useState, useEffect } from 'react'

const App = () => {

  const [basket, setBasket] = useState([]);
  const [cost, setCost] = useState();

  useEffect(() => {
    const totalPrice = basket.reduce((pre, basket) => pre + (basket.amount * basket.price), 0)
    setCost(totalPrice);
  }, [basket])


  return (
    <>
      <Header />
      <main className='main-part'>
        <div className='products'>
          {
            Products.map(product => (
              <Product key={product.id} basket={basket} setBasket={setBasket} product={product} />
            ))
          }
        </div>
        <Basket cost={cost} basket={basket} />
      </main>
    </>
  )
}

export default App