import './App.css';
import ItemListContainer from './components/containers/itemsListContainer';
import { ItemDetailContainer } from './components/containers/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import { ItemDetail } from './components/ItemDetail';
import Cart from './components/cart';


function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
