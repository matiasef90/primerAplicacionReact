import React,{useState} from 'react';
import './ItemCount.css';



const ItemCount = ({stock}) =>{

    const[cantidad, setCantidad] = useState(1);

    const restar = () =>{
        return (cantidad - 1) < 1 ? 1 : cantidad - 1;
    }
    const sumar = () =>{
        return cantidad < stock ? cantidad + 1 : stock;
    }
    return<>
    <div className = 'ItemCount'>
        <button className = 'button' onClick = {() => {setCantidad(restar())}}>-</button>
        <p>{cantidad}</p>
        <button className = 'button' onClick = {() => {setCantidad(sumar())}}>+</button>
        <p>{cantidad === stock ? 'No hay Stock': null}</p>
    </div>
    </>
}


export default ItemCount;