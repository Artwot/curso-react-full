import { useState } from 'react';
import styled from '@emotion/styled';

import Form from './components/Form';
import BgImage from './assets/images/bg.png';

function App() {
  // Styled Components
  const Container = styled.main`
    max-width: 1024px;
    margin: 0 auto;
    width: 90%;

    @media (min-width: 992px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }
  `;

  const Heading = styled.h1`
    font-family: 'Lato', sans-serif;
    color: #fff;
    font-size: 4rem;
    font-weight: 900;
  `;

  const Image = styled.img`
    max-width: 400px;
    width: 80%;
    margin: 100px auto 0 auto;
    display: block;
  `;
  // End Styled Components

  return (
    <Container>
      <Heading>Cotiza Criptomonedas al instante</Heading>
      <div style={{ position: 'relative' }}>
        <Image src={BgImage} />
        <Form />
      </div>
    </Container>
  );
}

export default App;
