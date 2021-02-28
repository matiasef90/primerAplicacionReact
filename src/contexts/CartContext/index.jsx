import { createContext, useState} from "react";


export const CartContext = createContext([]);



export const CartContextProvider = ({children}) => {
 
    const [product, setProduct] = useState([]);

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





