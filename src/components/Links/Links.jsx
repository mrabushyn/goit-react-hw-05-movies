import { Outlet } from 'react-router-dom';
import { StyledLink, LinkContainer, TitleH2 } from './Links.styled';


const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

export const CastReviewsLinks = () => {
  return (
    <div>
      <TitleH2> Additional information: </TitleH2>
      <LinkContainer>
        {navItems.map(({ href, text }) => (
          <StyledLink to={href} key={href}>
            {text}
          </StyledLink>
        ))}
      </LinkContainer>
      <Outlet />
    </div>
  );
};
