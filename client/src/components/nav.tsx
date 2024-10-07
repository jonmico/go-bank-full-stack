import styled from 'styled-components';

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
`;

export default function Nav() {
  return (
    <nav>
      <NavList>
        <div>Login</div>
        <div>Register</div>
      </NavList>
    </nav>
  );
}
