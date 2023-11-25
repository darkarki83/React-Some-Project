import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <Main />
      </header>
    </div>
  );
}

export default App;
