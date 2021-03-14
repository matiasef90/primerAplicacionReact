import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ItemCount from '../ItemCount';
import './Item.css';

const Item = ({title, price, stock, itemId}) =>{

    return <div className= 'card'>
        <h3>{title}</h3>
        <p>Precio: {price}</p>
        <p>Stock: {stock}</p>
        <NavLink to = {`/producto/${itemId}`}>Ver mas</NavLink>
    </div>
}

export default Item;