import React from 'react';
import Item from '../Item';

export const ItemList = ({productos}) => {
    return <>
        {productos.map((producto) => {return  <Item key={producto.id} name = {producto.name} price ={producto.price} stock = {producto.stock} />})}
    </>
}