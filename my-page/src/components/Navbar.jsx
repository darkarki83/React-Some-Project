import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src="../logo.svg" alt="logo" />  
      <ul className="nav-items">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
