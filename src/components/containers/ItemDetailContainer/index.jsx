import React from 'react';
import { useParams } from 'react-router-dom';
import productos from '../../../mocks/listaProductos';
import ItemCount from '../../ItemCount';
import { ItemDetail } from '../../ItemDetail';

export const ItemDetailContainer = () => {

    
    const {id} = useParams();
    
    const [producto, getProducto] = React.useState([]);
    console.log('Este es el id: ' + id);
    
    const onAdd = ( producto,  cantidad , stock) => {
        return ( ) =>{
            if (cantidad <= stock ) {
                /* dejar vacio por ahora */
            }
        }
    }
    console.log('estas en item detail container');
    
    React.useEffect(() =>{
        const myPromise = new Promise((resolve) =>{
            setTimeout(() => resolve(productos),2000);
        });
        
        myPromise.then((result) => {
            getProducto(result.find(e => e.id == id))
            console.log(id);
        });
    },[]);
    
    return <>
        <ItemDetail item = {producto} />
    </>
};