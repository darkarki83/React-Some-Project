import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Context from './components/Context/Context';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Context />
      </header>
    </div>
  );
}

export default App;
