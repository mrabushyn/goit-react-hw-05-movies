import { StyledLink, Container } from './Header.styled';
import { Outlet } from 'react-router-dom';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export const Header = () => {
  return (
    <>
      <Container>
        {navItems.map(items => (
          <StyledLink to={items.href} key={items.href}>
            {items.text}
          </StyledLink>
        ))}
      </Container>
      <Outlet />
    </>
  );
};
