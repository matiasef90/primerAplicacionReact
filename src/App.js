import './App.css';
import ItemListContainer from './components/containers/itemsListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <ItemListContainer greeting = 'Hola a todos'/>
    </div>


  );
}

export default App;
