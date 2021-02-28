import React, {useState} from 'react';
import ItemCount from '../../ItemCount';
import listaProductos from '../../../mocks/listaProductos';
import { ItemList } from '../../ItemList';
import { useParams } from 'react-router-dom';
const ItemListContainer = () =>{

    const {categoria} = useParams();
    const [productos, setProductos] = useState([]);

    React.useEffect(()=>{
            const myPromise = new Promise((resolve) => {
                setTimeout(() => resolve(listaProductos),500)
            });
        
            myPromise.then((mensaje)=> {
                if(categoria){
                    setProductos(mensaje.filter(e => e.categoria === categoria));
                }else{
                    setProductos(mensaje)
                }
            }
            );
            
        }, [categoria]);
        
    return(
            <>
                <ItemList productos = {productos}/>
            </>
        )
};




export default ItemListContainer;