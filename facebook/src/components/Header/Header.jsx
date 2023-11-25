import s from './Header.module.css';
import logo from './../../logo.svg';

export default function Header() {
    return (
        <header className={s.header} >
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    )
}