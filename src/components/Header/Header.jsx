import { StyledLink, Box } from './Header.styled';

const navItems = [
  {href: '/', text: 'Home' },
  {href: '/movies', text: 'Movies' },
]

export const Header = () => {
  return (
    <Box>
      {navItems.map(items => (
        <StyledLink 
        to={items.href} key={items.href}>
          {items.text}
        </StyledLink>
      ))}
    </Box>
  );}