import React, {useState} from 'react';
import ItemCount from '../../ItemCount';

const ItemListContainer = () =>{
    const [contador, setContador] = useState(1);

    const onAdd = (stock) => {
        if(contador < stock){
            setContador(contador + 1);
        }
    }
    const onSubstract = () => {
        if(contador > 1){
            setContador(contador - 1);
        }
    }


    return(
            <>
                <ItemCount stock = {12} contador = {contador} onAdd = {onAdd} onSubstract = {onSubstract}/>
            </>
        )
};




export default ItemListContainer;