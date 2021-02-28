import logo from "./img/logo.png";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


const Carrito = () =>{

    const { product } = useContext(CartContext);

    let quantityProducts = 0;

    if(product.length !== 0){
        let listQuantityProducts = product.map(e => e.quantity);
        quantityProducts = listQuantityProducts.reduce((a, b) => a + b);
    }


    return (
        <>
            <Link to = '/cart'>
                <img src={logo} alt='carrito' width='30px'/>
                {(quantityProducts === 0) ? null : <p>{quantityProducts}</p>}
            </Link>
        </>
    );
}

export default Carrito;