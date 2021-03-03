import { createContext, useEffect, useState} from "react";
import { getFirestore } from "../../firebase";


export const CartContext = createContext([]);



export const CartContextProvider = ({children}) => {
 
    const [product, setProduct] = useState([]);
    const [books, setBooks] = useState();

    useEffect(() =>{
        const db = getFirestore();
        const itemCollection = db.collection("Books");
        itemCollection.get().then((value) =>{
            console.log(value);
            setBooks(value);

        })
    },[])

    const addItem = (item, quantity) => {
        if(isInCart(item.id, quantity)){
            setProduct([...product, {item, quantity: quantity}]);
        };
    }

    const removeItem = (itemId) => {
        setProduct(product.filter(e => itemId !== e.item.id));
    }

    const clear = () => setProduct([]);

    const isInCart = (id, quantity) =>{
        let index = product.findIndex(e => e.item.id == id);
        if(index !== -1){
            product[index].quantity += quantity; 
        }
        return index === -1 ? true : false;
    }

    return <CartContext.Provider value={{ addItem, product, clear, removeItem }}>
        {children}
    </CartContext.Provider>
}





