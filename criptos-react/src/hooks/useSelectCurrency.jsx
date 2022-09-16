import React from 'react';
import styled from '@emotion/styled';

// Begin Styled Components
const Label = styled.label`
  color: #fff;
  font-weight: 700;
`;
// End Styled Components

const useSelectCurrency = (label, options) => {
  const SelectCurrency = () => (
    <>
      <Label>{label}</Label>
      <select>
        <option value=''>Seleccionar</option>
        {options.map((option) => (
          <option key={option.id}>{option.name}</option>
        ))}
      </select>
    </>
  );

  return [SelectCurrency];
};

export { useSelectCurrency };
