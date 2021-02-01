import './App.css';
import ItemListContainer from './components/containers/itemsListContainer';
import ItemCount from './components/ItemCount';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <ItemListContainer greeting = 'Hola a todos'/>
      <ItemCount stock = {12}/>
    </div>
  );
}

export default App;
