import Head from 'next/head';
import Layout from '../components/Layout.js';
import styled from 'styled-components';
import Charter from '../components/Charter.js';

const charters = [
  {
    location: 'Vancouver',
    img: '/assets/vancouver.png',
  },
  {
    location: 'Squamish',
    img: '/assets/squamish.png',
  },
  {
    location: 'Pemberton',
    img: '/assets/pemberton.png',
  },
  {
    location: 'Tofino',
    img: '/assets/tofino.png',
  },
  {
    location: 'Ucluelet',
    img: '/assets/ucluelet.png',
  },
  {
    location: 'Victoria',
    img: '/assets/victoria.png',
  },
];

const HeroDiv = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem;

  @media (min-width: 768px) {
    height: 23rem;
    padding: 3rem 5rem;
  }
`;

const HeroH1 = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  line-height: 45px;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    line-height: 60px;
    font-size: 2.5rem;
  }
`;

const ChartersButton = styled.button`
  font-weight: 600;
  color: white;
  cursor: pointer;
  border-radius: 2px;
  padding: 1rem 2rem;
  background: #708332;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    &:hover {
      transform: translateY(-8px);
      opacity: 0.7;
    }
  }
`;

const ChartersButtonDark = styled(ChartersButton)`
  background: #283618;
`;

const MidpageDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    height: 25rem;
    flex-direction: row;
  }
`;

const MountainImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: auto;
  @media (min-width: 768px) {
    width: 60%;
    max-width: 100%;
  }
`;

const Section = styled.section`
  margin: 2rem;
  display: flex;
  flex-direction: column;

  & > p {
    padding: 2rem 0;
  }

  &#charters {
    @media (min-width: 768px) {
      text-align: center;
      width: auto;
    }
  }

  @media (min-width: 768px) {
    margin: 2rem;
    margin-top: 4rem;
    width: 50%;
  }
`;

const H2 = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.7rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

const Charters = styled.div`
  @media (min-width: 768px) {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }
`;

const BookButton = styled.button`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;
  color: white;
  cursor: pointer;
  border-radius: 2px;
  background: #283618;
  padding: 0.5rem 1rem;
  margin-bottom: 5rem;
  width: 15rem;
  align-self: center;
  @media (min-width: 768px) {
    &:hover {
      transform: translateY(-8px);
      opacity: 0.7;
    }
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Northwest Charters</title>
        <meta name="description" content="Northwest Charters Home" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Layout>
        <HeroDiv>
          <HeroH1>
            Private charter trips throughout beautiful British Columbia
          </HeroH1>

          <a href="#charters">
            <ChartersButton>Our Charters</ChartersButton>
          </a>
        </HeroDiv>
        <MidpageDiv>
          <MountainImg
            src="/assets/image 10.png"
            alt="Mountain Range"
            width="776"
            height="507"
          />
          <Section>
            <H2>Reach New Places</H2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#charters">
              <ChartersButtonDark>Our Charters</ChartersButtonDark>
            </a>
          </Section>
        </MidpageDiv>
        <Section id="charters">
          <H2>Our Charters</H2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Charters>
            {charters.map((item, index) => {
              const { img, location } = item;
              return <Charter key={index} img={img} location={location} />;
            })}
          </Charters>
        </Section>
        <BookButton>Book your trip today</BookButton>
      </Layout>
    </>
  );
}
