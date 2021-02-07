import React from 'react';
import Producto from '../../../mocks/producto';
import { ItemDetail } from '../../ItemDetail';

export const ItemDetailContainer = () => {

    const [producto, getProducto] = React.useState([]);
    
    React.useEffect(() =>{
        const myPromise = new Promise((resolve) =>{
            setTimeout(() => resolve(Producto),2000);
        });
    
        myPromise.then((result) => getProducto(result));
    },[]);

    return <>
        <ItemDetail item = {producto} />
    </>
};