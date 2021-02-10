import './App.css';
import ItemListContainer from './components/containers/itemsListContainer';
import { ItemDetailContainer } from './components/containers/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import { Home } from './components/containers/Home';

function App() {
  return (
    <BrowserRouter>
        <header className="App-header">
        </header>
      <Navbar />
      <Switch>
        <Route exact path ='/'>
          <Home/>
        </Route>
        <Route path = '/ItemlistContainer'>
          <ItemListContainer />
        </Route>
        <Route path = '/ItemDetailContainer'>
        <ItemDetailContainer/>
        </Route> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
