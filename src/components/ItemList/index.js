import React from 'react';
import Item from '../Item';

export const ItemList = ({productos}) => {
    return <>
        {
            productos.map((item) =>{
                return  <Item key = {item.id} itemId = {item.id} name = {item.title} price ={item.price} stock = {item.stock}/>
            })
        }
    </>
}