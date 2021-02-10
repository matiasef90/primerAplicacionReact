import React, {useEffect, useState} from 'react';
import './ItemCount.css';



const ItemCount = ({stock, initial ,onAdd}) =>{

    const [contador, getContador] = useState(initial);


        const sumar = () =>{
            if(contador < stock){
                getContador(contador + 1);
            }
        };
        const restar = () => {
            if(contador > 1){
                getContador(contador - 1);
            }
        }
    
  
    return<>
    <div className = 'ItemCount'>
        <div className = 'container'>
        <button className = 'button' onClick = {() => restar()}>-</button>
        <p>{contador}</p>
        <button className = 'button' onClick = {() => sumar()}>+</button>
        </div>
        <div className = 'container'>
            <button className = 'button' onClick = {() => onAdd()}>Comprar</button>
        </div>
    </div>
    </>
}


export default ItemCount;
