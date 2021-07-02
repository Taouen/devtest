import styled from 'styled-components';

const CharterCard = styled.div`
  background: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  color: white;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    &:hover {
      transform: translateY(-8px);
      opacity: 0.7;
    }
    width: calc(33% - 1rem);
  }
`;

const Info = styled.div`
  height: 25%;
  background: #000000b3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const H3 = styled.h3`
  font-family: 'Playfair Display', Serif;
  font-size: 1.2rem;
  line-height: 27px;
`;

const Book = styled.p`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.5rem;
`;

const Charter = ({ img, location }) => (
  <CharterCard img={img}>
    <Info>
      <H3>{location}</H3>
      <Book>Book Now</Book>
    </Info>
  </CharterCard>
);

export default Charter;
