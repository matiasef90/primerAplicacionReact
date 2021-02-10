import React from 'react';
import Producto from '../../../mocks/producto';
import ItemCount from '../../ItemCount';
import { ItemDetail } from '../../ItemDetail';

export const ItemDetailContainer = () => {

    const [producto, getProducto] = React.useState([]);

    const onAdd = ( producto,  cantidad , stock) => {
        return ( ) =>{
           if (cantidad <= stock ) {
           /* dejar vacio por ahora */
          }
        }
     }
    
    React.useEffect(() =>{
        const myPromise = new Promise((resolve) =>{
            setTimeout(() => resolve(Producto),2000);
        });
    
        myPromise.then((result) => getProducto(result));
    },[]);

    return <>
        <ItemDetail item = {producto} />
        <ItemCount initial = {1} stock = {5} onAdd = {onAdd} />
    </>
};