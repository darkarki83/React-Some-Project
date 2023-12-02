import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/profile" element={<Profile store={props.store}/>} />
          <Route path="/dialogs" element={<Dialogs store={props.store} />} />
          <Route path="/" element={<Profile state={props.store}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
