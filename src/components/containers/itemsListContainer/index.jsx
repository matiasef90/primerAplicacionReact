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
    
    return(
            <>
                <ItemList productos = {productos} />
            </>
        )
};




export default ItemListContainer;