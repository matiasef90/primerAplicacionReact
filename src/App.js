import './App.css';
import ItemListContainer from './components/containers/itemsListContainer';
import { ItemDetailContainer } from './components/containers/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import { ItemDetail } from './components/ItemDetail';


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
        <Route path = '/ItemListContainer'>
          <ItemListContainer/>
        </Route> 
        <Route path = '/:categoria'>
          <ItemListContainer/>
        </Route> 
        <Route path = '/ItemDetailContainer/:id'>
          <ItemDetailContainer />
        </Route> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
