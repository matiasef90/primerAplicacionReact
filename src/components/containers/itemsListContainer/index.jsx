import React, {useState} from 'react';
import ItemCount from '../../ItemCount';
import listaProductos from '../../../mocks/listaProductos';
import { ItemList } from '../../ItemList';
const ItemListContainer = () =>{

    const [productos, setProductos] = useState([]);

    React.useEffect(()=>{
            const myPromise = new Promise((resolve) => {
                setTimeout(() => resolve(listaProductos),3000)
            });
        
            myPromise.then((mensaje)=> setProductos(mensaje));

    },[]);
    

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
                <ItemList productos = {productos} />
            </>
        )
};




export default ItemListContainer;