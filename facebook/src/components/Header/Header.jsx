import './Header.css';
import logo from './../../logo.svg';

export default function Header() {
    return (
        <header className='header' >
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    )
}