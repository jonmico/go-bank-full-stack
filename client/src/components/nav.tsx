import styled from 'styled-components';

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
`;

export default function Nav() {
  return (
    <nav>
      <NavList>
        <li>Login</li>
        <li>Register</li>
      </NavList>
    </nav>
  );
}
