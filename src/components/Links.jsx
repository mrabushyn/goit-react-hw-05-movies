import { NavLink, Outlet } from 'react-router-dom';
// import styled from 'styled-components';
// import { Box } from 'components/Box'
// import css from '../pages/Home.module.css';

// import { MovieCast } from '../components/Cast';
// import { MovieReviews } from '../components/Reviews';

const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

export const CastReviewsLinks = () => {
  return (
    <div>
      Additional information:
      <ul>
        {navItems.map(({ href, text }) => (
          <NavLink to={href} key={href}>
            {text}
          </NavLink>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
