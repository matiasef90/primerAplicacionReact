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
      <ItemListContainer />
    </div>
  );
}

export default App;
