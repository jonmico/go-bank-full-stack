import styled from 'styled-components';
import { StyledLink } from './ui/styled-link';

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
`;

export default function Nav() {
  return (
    <nav>
      <NavList>
        <StyledLink to={'login'}>Login</StyledLink>
        <div>Register</div>
      </NavList>
    </nav>
  );
}
