import { CartContext } from '../../contexts/CartContext';
import React, { useContext} from "react";
import './cartItem.css';

export const CartItem = (item) =>{

    const {removeItem} = useContext(CartContext);
    let units = item.item.quantity;
    let price = item.item.item.price;
    let subTotal = units * price;





    return <div className = {'cart'}>
        <h4>Titulo = {item.item.item.name}</h4>
        <h4>Precio = {item.item.item.price}</h4>
        <h4>Cantidad = {item.item.quantity}</h4>
        <h4>Subtotal = {subTotal}</h4>
        <button onClick = { () => removeItem(item.item.item.id)}>x</button>
    </div>
}