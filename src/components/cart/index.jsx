import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartItem } from "../cartItem";
import { Link } from "react-router-dom";
import { getFirestore } from "../../firebase";
import '@firebase/firestore';

const Cart = () =>{

    const {product} = useContext(CartContext);
    const [buyer, setBuyer] = useState({name:'', phone:'', email:''});

    let suma = 0;

    if(product.length !== 0){
        let listSubtotal = product.map(e => e.item.price * e.quantity);
        suma = listSubtotal.reduce((a,b) => a + b);
    }

    const handlerBuyer = (element) =>{
        setBuyer({...buyer, [element.target.name] : element.target.value});
    }

    const sendOrder = (event) => {
        event.preventDefault();
        db = getFirestore();
        const orders = db.callection("orders");
        const newOrder = {
            buyer: buyer,
            items: product,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            price: suma
        }
        orders.add(newOrder).then(({id}) =>{
            setOrderId(id);   
        }).catch(err =>{
            setError(err);
        }).finally(() =>{
            setLoading(false);
        });
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
            product.length !== 0 ?
            <div>
                <h3>Total de la compra: {suma}</h3> 
                <form>
                <input placeholder="Nombre Completo" type="text" name="name" onChange={handlerBuyer}/>
                <input placeholder="Telefono" type="text" name="phone" onChange={handlerBuyer}/>
                <input  placeholder="Email" type="text" name="email" onChange={handlerBuyer}/>
                <input type="button" value="Finalizar Compra" onClick={sendOrder}/>
                </form>
            </div>
            : null
        }

    </>;
}

export default Cart;