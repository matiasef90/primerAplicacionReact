import React from 'react';
import './Item.css';

const Item = ({name, price, stock}) =>{
    return <div className= 'card'>
        <h3>{name}</h3>
        <p>Precio: {price}</p>
        <p>Stock: {stock}</p>
    </div>
}

export default Item;