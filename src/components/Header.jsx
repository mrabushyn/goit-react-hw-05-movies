import {Link} from "react-router-dom";

const navItems = [
  {href: '/', text: 'Home' },
  {href: '/movies', text: 'Movies' },
]

export const Header = () => {
  return (
    <div >
      {navItems.map(items => <Link to={items.href} key={items.href}>{items.text}</Link>) }
    </div>
    
)}