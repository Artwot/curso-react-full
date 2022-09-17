import React from 'react';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import { useSelectCurrency } from '../hooks/useSelectCurrency';
import { currencies } from '../data/currencies.js';

// Styled Components
const FormContainer = styled.div`
  height: auto;
  width: 80%;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.8);
`;

const InputSubmit = styled.input`
  margin: 1rem auto;
  display: block;
  padding: 16px 32px;
  border: 0;
  text-decoration: none;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
// End Styled Components

const Form = () => {
  const [cryptos, setCryptos] = useState([]);

  // Fetch the data from the API
  useEffect(() => {
    const fetchData = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const response = await fetch(url);
      const result = await response.json();

      const arrayCryptos = result.Data.map((coin) => {
        const crypto = {
          id: coin.CoinInfo.Id,
          name: coin.CoinInfo.Name,
          fullName: coin.CoinInfo.FullName,
          image: coin.CoinInfo.ImageUrl,
        };

        return crypto;
      });

      setCryptos(arrayCryptos);
    };

    fetchData();
  }, []);

  const [SelectCurrency] = useSelectCurrency('Seleccionar moneda', currencies);
  return (
    <FormContainer>
      <form>
        <SelectCurrency />
        <InputSubmit type='submit' value='Cotizar' />
      </form>
    </FormContainer>
  );
};

export default Form;
