import React from 'react';
import { NavLink } from 'react-router-dom';
import './Item.css';

const Item = ({title, price, stock, itemId, img}) =>{

    return <div className= 'card'>
        <h3>{title}</h3>
        <img src={img} alt="portada"/>
        <p>Precio: {price}</p>
        <p>Stock: {stock}</p>
        <NavLink to = {`/producto/${itemId}`}>Ver mas</NavLink>
    </div>
}

export default Item;