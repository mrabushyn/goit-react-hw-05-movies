import { StyledLink, Container } from './Header.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

 const Header = () => {
  return (
    <>
      <Container>
        {navItems.map(items => (
          <StyledLink to={items.href} key={items.href}>
            {items.text}
          </StyledLink>
        ))}
      </Container>
      <Suspense>
        <Outlet />
      </Suspense>
      
    </>
  );
};
export default Header;