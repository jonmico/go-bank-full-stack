import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
`;

export default function Nav() {
  return (
    <nav>
      <NavList>
        <Link to={'login'}>Login</Link>
        <div>Register</div>
      </NavList>
    </nav>
  );
}
