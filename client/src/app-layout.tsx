import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyles } from './styles/global-styles';
import Header from './components/header';

const Layout = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-areas:
    'nav'
    'main';
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

export default function AppLayout() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Header />
        <Container>
          <Outlet />
        </Container>
      </Layout>
    </>
  );
}
