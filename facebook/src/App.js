import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Technologies from './components/Technologies/Technologies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Technologies />
      </header>
    </div>
  );
}

export default App;
