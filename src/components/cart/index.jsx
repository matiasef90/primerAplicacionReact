import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartItem } from "../cartItem";
import { Link } from "react-router-dom";

const Cart = () =>{

    const {product} = useContext(CartContext);

    let suma = 0;

    if(product.length !== 0){
        let listSubtotal = product.map(e => e.item.price * e.quantity);
        suma = listSubtotal.reduce((a,b) => a + b);
    }


    return <>
        {
            product.length === 0  ? 
            <div>
                <h1>No hay productos agregados</h1>
                <Link to='/'>Volver a la Tienda</Link>
            </div> :
            product.map(e => <CartItem item = {e} key = {e.item.id} />)
        }
        {
            product.length !== 0 ? <h3>Total de la compra: {suma}</h3> : null
        }
    </>;
}

export default Cart;