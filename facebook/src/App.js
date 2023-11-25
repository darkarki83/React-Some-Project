import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      {/* <Profile /> */}
      
      <div>
        <Dialogs />
        {/* <Profile /> */}
      </div>
    </div>
  );
}

export default App;
