import './App.css';
import ItemListContainer from './components/containers/itemsListContainer';
import { ItemDetailContainer } from './components/containers/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Cart from './components/cart';
import { CartContextProvider } from './contexts/CartContext';


function App() {
  return (

    <BrowserRouter>
    <CartContextProvider>
        <header className="App-header">
        </header>
      <Navbar />
      <Switch>
        <Route exact path = '/'>
          <ItemListContainer />
        </Route>
        <Route path = '/listaproductos'>
          <ItemListContainer/>
        </Route> 
        <Route path = '/categorias/:categoria'>
          <ItemListContainer/>
        </Route>  
        <Route path = '/producto/:id'>
          <ItemDetailContainer />
        </Route> 
        <Route path = '/cart'>
          <Cart />
        </Route> 
      </Switch>
    </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
