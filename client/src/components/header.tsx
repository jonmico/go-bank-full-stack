import styled from 'styled-components';
import Nav from './nav';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  border-bottom: 1px solid gray;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>GoBank</h1>
      <Nav />
    </StyledHeader>
  );
}
