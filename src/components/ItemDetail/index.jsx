import React from "react";
import './ItemDetail.css';
import '../../mocks/listaProductos';


export const ItemDetail = ({item}) => {
    return <div className = 'ItemDetail'>
        <h3>{item.name}</h3>
        <img src={item.img} alt="Portada"/>
        <h4>Precio : {item.price}</h4>
        <p>Descripción : {item.description}</p>
    </div>
};