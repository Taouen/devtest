import Link from 'next/link';
import styled from 'styled-components';

const pages = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Charters',
    link: '#charters',
  },
  {
    name: 'Contact',
    link: '#',
  },
];

const HeaderBar = styled.header`
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  padding-top: 2rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const HoverLink = styled.a`
  margin-bottom: 0.2rem;

  &::last-of-type {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    margin-right: 1.5rem;

    &::last-of-type {
      margin-right: 0;
    }
    &:hover {
      transform: translateY(-8px);
      opacity: 0.7;
    }
  }
`;

const Logo = styled.img`
  height: 37px;
  width: 152px;
`;

const Header = () => (
  <HeaderBar>
    <Logo src="/assets/logo.svg" alt="Northwest Charters" />
    <Navigation>
      {pages.map((page, index) => {
        return (
          <HoverLink key={index} href={page.link}>
            {page.name}
          </HoverLink>
        );
      })}
    </Navigation>
  </HeaderBar>
);

export default Header;
