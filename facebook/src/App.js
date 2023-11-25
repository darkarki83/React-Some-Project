import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs" element={<Dialogs />} />
          <Route path="/" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
