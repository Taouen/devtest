import styled from 'styled-components';

const FooterBar = styled.footer`
  color: white;
  display: flex;
  background: #152700;
  justify-content: center;
  padding: 2rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  flex-direction: column;

  @media (min-width: 768px) {
    justify-content: center;
    flex-direction: row;
  }
`;

const HoverLink = styled.a`
  margin-bottom: 0.5rem;
  @media (min-width: 768px) {
    &:hover {
      transform: translateY(-8px);
      opacity: 0.7;
    }
  }
`;

const Logo = styled.img`
  margin: 0 1rem;
  height: 37px;
  width: 152px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const LogoMobile = styled.img`
  margin-bottom: 1rem;
  height: 37px;
  width: 152px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Footer = () => (
  <FooterBar>
    <Container>
      <LogoMobile src="/assets/logo.svg" alt="Northwest Charters" />
      <HoverLink href="tel:+1-604-604-6604">+1-604-604-6604</HoverLink>
      <Logo src="/assets/logo.svg" alt="Northwest Charters" />
      <HoverLink href="mailto:info@nwcharters.com">
        info@nwcharters.com
      </HoverLink>
    </Container>
  </FooterBar>
);

export default Footer;
