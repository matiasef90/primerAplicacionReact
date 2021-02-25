import { createContext, useState} from "react";


export const CartContext = createContext([]);



export const CartContextProvider = ({children}) => {
 
    const [product, setProduct] = useState([]);

    const addItem = (item, quantity) => {

        if(isInCart(item.id)){
            setProduct(...product, {item, quantity: quantity});
        }
    }

    const removeItem = (itemId) => {
        setProduct(product.filter(e => itemId !== e.item.id));
    }

    const clear = () => setProduct([]);

    const isInCart = (id) =>{
        let index = product.find(e => e.item.id === id);

        return (index !== -1 ? true : false);
    }

    return <CartContext.Provider value={{addItem, removeItem, clear}}>
        {children}
    </CartContext.Provider>
}





