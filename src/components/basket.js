import React from 'react'

export default function basket({ basket, cost }) {
    return (
        <div className='sidebar'>
            <div>
                <h2>Sepet</h2>
                <ul className='basket'>
                    {
                        basket.map(item => (
                            <li key={item.id}>
                                <img src={item.img} />
                                <p className='header'>{item.name}</p>
                                <p className='count'>x {item.amount}</p>
                                <p className='price'> = {item.amount * item.price} TL</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <p className='total-price'>Total: <strong>{cost} TL</strong></p>
        </div>
    )
}
