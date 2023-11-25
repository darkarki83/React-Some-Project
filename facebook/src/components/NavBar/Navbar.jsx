import s from './Navbar.module.css';
import { Link } from 'react-router-dom';

console.log(s);

export default function Navbar() {
  return (
    <nav className={s.nav} >
      <div className={`${s.item} ${s.active}`}>
        <Link to='/profile'>Profile</Link>
      </div>
      <div className={s.item}>
        <Link to='/dialogs'>Messages</Link>
      </div>
      <div className={s.item}>
        <Link to='/news'>News</Link>
      </div>
      <div className={s.item}>
        <Link to='/music'>Music</Link>
      </div>
      <br />
      <div className={s.item}>
        <Link to='/settings'>Settings</Link>
      </div>
    </nav>
  )
}
