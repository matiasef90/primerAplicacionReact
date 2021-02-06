import './ItemCount.css';



const ItemCount = ({stock, contador ,onAdd, onSubstract}) =>{
  
    return<>
    <div className = 'ItemCount'>
        <div className = 'container'>
        <button className = 'button' onClick = {() => onSubstract()}>-</button>
        <p>{contador}</p>
        <button className = 'button' onClick = {() =>{ onAdd(stock)}}>+</button>
        </div>
        <div className = 'container'>
            <button className = 'button'>Comprar</button>
        </div>
    </div>
    </>
}


export default ItemCount;
