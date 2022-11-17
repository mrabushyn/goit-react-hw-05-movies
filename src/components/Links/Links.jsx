import { Suspense } from 'react';
import { Outlet} from 'react-router-dom';
import { StyledLink, LinkContainer, TitleH2 } from './Links.styled';

const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

export const CastReviewsLinks = state => {

  return (
    <div>
      <TitleH2> Additional information: </TitleH2>
      <LinkContainer>
        {navItems.map(({ href, text }) => (
          <StyledLink
            to={href}
            key={href}
            state={{ from: state?.state }}
          >
            {text}
          </StyledLink>
        ))}
      </LinkContainer>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
