import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

console.log(s);

export default function Navbar() {
  return (
    <nav className={s.nav} >
      <div className={`${s.item}`}>
        <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' activeClassName={s.active}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
      </div>
      <br />
      <div className={s.item}>
        <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
      </div>
    </nav>
  )
}
