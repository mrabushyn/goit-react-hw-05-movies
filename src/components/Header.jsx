import {NavLink} from "react-router-dom";
import css from '../pages/Home.module.css';


const navItems = [
  {href: '/', text: 'Home' },
  {href: '/movies', text: 'Movies' },
]

export const Header = () => {
  return (
    <div >
      {navItems.map(items => (
        <NavLink className={css.hederLink} to={items.href} key={items.href}>
          {items.text}
        </NavLink>
      ))}
    </div>
  );}