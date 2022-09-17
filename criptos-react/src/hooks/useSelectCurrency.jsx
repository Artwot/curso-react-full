import React from 'react';
import styled from '@emotion/styled';

// Begin Styled Components
const Label = styled.label`
  color: #fff;
  font-weight: 700;
  display: block;
  font-size: 24px;
  font-weight: 300;
  margin: 10px 20px;
`;

const Select = styled.select`
  width: 90%;
  display: block;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  font-size: 16px;
  font-weight: 300;
  border-radius: 10px;
  border: 1px solid #fff;
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(30px);

  &:focus {
    outline: none;
  }
`;

// End Styled Components

const useSelectCurrency = (label, options) => {
  const SelectCurrency = () => (
    <>
      <Label>{label}</Label>
      <Select>
        <option value=''>Seleccionar</option>
        {options.map((option) => (
          <option key={option.id}>{option.name}</option>
        ))}
      </Select>
    </>
  );

  return [SelectCurrency];
};

export { useSelectCurrency };
