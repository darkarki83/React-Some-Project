import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <h1 className="header__title">Header</h1>
            <a className="header__link" href='#s'>Home</a>
            <a className="header__link" href='#s'>News Feed</a>
            <a className="header__link" href='#s'>Message</a>
        </header>
    );
}