import './App.css';
import ButtonComponent from './components/button.jsx';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <ButtonComponent />
    </div>
  );
}

export default App;
