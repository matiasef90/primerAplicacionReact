import { createContext, useEffect, useState} from "react";
import { getFirestore } from "../../firebase";


export const CartContext = createContext([]);



export const CartContextProvider = ({children}) => {
 
    const [product, setProduct] = useState([]);
    const [books, setBooks] = useState([]);

    useEffect(() =>{
        const db = getFirestore();
        const itemCollection = db.collection("books");
        itemCollection.get().then( async (value) =>{
            if(value.size === 0){
                console.log('No hay resultados');
            }

            let aux = await Promise.all(value.docs.map(async product => {
                const categorieCollection = db.collection("categories");
                let auxCategory= await categorieCollection.doc(product.data().idCategory).get();
                return {...product.data(), id:product.id, category: auxCategory.data().category}
            }));
            setBooks(aux);
            
        }).catch((error) => {
            console.log("Error items", error);
        });

    },);

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


    return <CartContext.Provider value={{ addItem, product, clear, removeItem, books }}>
        {children}
    </CartContext.Provider>
}





