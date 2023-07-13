import React from 'react'

export default function product({ product, basket, setBasket }) {

    const basketProducts = basket.find(item => item.id === product.id);

    function addBasket() {
        const addFind = basket.find(item => item.id === product.id);
        if (addFind) {
            addFind.amount += 1;
            setBasket([...basket.filter(item => item.id !== product.id), {
                id: product.id,
                name: product.name,
                img: product.img,
                price: product.price,
                amount: addFind.amount
            }])
        } else {
            setBasket([...basket, {
                id: product.id,
                name: product.name,
                img: product.img,
                price: product.price,
                amount: 1
            }])
        }
    }

    function removeBasket() {
        const removeFind = basket.find(item => item.id === product.id);
        removeFind.amount -= 1;

        if (removeFind.amount == 0) {
            setBasket([...basket.filter(item => item.id !== product.id)]);
        } else {
            setBasket([...basket.filter(item => item.id !== product.id), {
                id: product.id,
                name: product.name,
                img: product.img,
                price: product.price,
                amount: removeFind.amount
            }])
        }
    }

    return (
        <div className='item'>
            <img src={product.img} />
            <div className='content'>
                <h2 className='header'>{product.name}</h2>
                <p className='price'>{product.price} TL</p>
            </div>
            <ul className='action'>
                <li>
                    <button onClick={addBasket}>+</button>
                </li>
                <li>
                    <span>{basketProducts && basketProducts.amount || 0}</span>
                </li>
                <li>
                    <button disabled={!basketProducts} onClick={removeBasket}>-</button>
                </li>
            </ul>
        </div >
    )
}
