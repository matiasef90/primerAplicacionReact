import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../../contexts/CartContext';
import { ItemDetail } from '../../ItemDetail';

export const ItemDetailContainer = () => {

    const {books} = useContext(CartContext);    
    const {id} = useParams();
    
    const [product, getProduct] = useState([]);
    
    React.useEffect(() =>{
        
        console.log(books);
            getProduct(books.find(e => e.id === id))
    
    },[books]);
    
    return <>
        <ItemDetail item = {product} />
    </>
};