import React, { useState } from "react";
import './ItemDetail.css';
import '../../mocks/listaProductos';
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";


export const ItemDetail = ({item}) => {

    const [comprar, setComprar] = useState(false);
    const [unidades, setUnidades] = useState(0);

    const onAdd = (contador) => {
        setUnidades(contador);
        setComprar(true);
        console.log(`Vas a comprar ${contador} libros`)
    }

    console.log (unidades);
        
    return <div className = 'ItemDetail'>
        <h3>{item.name}</h3>
        <img src={item.img} alt="Portada"/>
        <h4>Precio : {item.price}</h4>
        <p>Descripción : {item.description}</p>
        {comprar ? <Link to='/cart'>Ir al carrito</Link> :
        <ItemCount stock = {item.stock} initial = {1} onAdd = {onAdd}/>
        }
    </div>
};