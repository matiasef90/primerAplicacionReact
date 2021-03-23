import React, {useContext, useState} from 'react';
import { ItemList } from '../../ItemList';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../../contexts/CartContext';
const ItemListContainer = () =>{

    const {categoria} = useParams();
    const [productos, setProductos] = useState([]);
    const{books} = useContext(CartContext);

    React.useEffect(()=>{
       
            categoria ? setProductos(books.filter(e => e.category === categoria)) : setProductos(books);
            
        }, [categoria, books]);
        
    return(
            <>
                <ItemList productos = {productos}/>
            </>
        )
};




export default ItemListContainer;