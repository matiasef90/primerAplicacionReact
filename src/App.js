import './App.css';
import ItemListContainer from './components/containers/itemsListContainer';
import { ItemDetailContainer } from './components/containers/ItemDetailContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
