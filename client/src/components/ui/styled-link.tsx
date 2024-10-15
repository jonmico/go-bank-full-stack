import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  transition: color 200ms ease-in-out;

  &.active {
    color: var(--text-300);
  }

  &:hover {
    color: var(--text-200);
  }
`;
