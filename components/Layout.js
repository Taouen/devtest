import styled from 'styled-components';
import Header from './Header.js';
import Footer from './Footer.js';

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.9rem;
  line-height: 22px;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const BackgroundHeroImage = styled.div`
  background-image: linear-gradient(to top, #000000b3, #000000b3),
    url('/assets/hero.png');
  background-size: cover;
  height: 30rem;
  width: 100%;
  left: 0;
  position: absolute;
  top: 0;
  z-index: -100;
`;

const Layout = (props) => (
  <Container>
    <BackgroundHeroImage />
    <Header />
    <Main>{props.children}</Main>
    <Footer />
  </Container>
);

export default Layout;
